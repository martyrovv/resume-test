import { useDrag, useDrop } from "react-dnd";
import { ReactNode, useRef } from "react";

type Props = {
  id: string;
  index: number;
  moveSection: (dragIndex: number, hoverIndex: number) => void;
  children: ReactNode;
};

export const DraggableSection = ({ id, index, moveSection, children }: Props) => {
  const ref = useRef<HTMLLIElement>(null);

  const [, drop] = useDrop({
    accept: "SECTION",
    hover(item: { id: string; index: number }) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      moveSection(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "SECTION",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <li ref={ref} style={{ opacity: isDragging ? 0.5 : 1, cursor: "move", listStyle: "none" }}>
      {children}
    </li>
  );
};
