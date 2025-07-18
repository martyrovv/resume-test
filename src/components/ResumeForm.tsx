import { Select, Button, Space, Card, Form } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ExperienceCard } from "./Cards/ExperienceCard";
import { EducationCard } from "./Cards/EducationCard";
import { AboutYourselfCard } from "./Cards/AboutYourselfCard";
import type { ExperienceCardType } from "./Cards/ExperienceCard";
import type { EducationCardType } from "./Cards/EducationCard";
import type { AboutYourselfType } from "./Cards/AboutYourselfCard";
import { DraggableSection } from "./DraggableSection";

export type ResumeFormType = {
  experience: ExperienceCardType;
  education: EducationCardType;
  about: AboutYourselfType;
};

type OPTIONS = {
  value: string;
  label: string;
};

const OPTIONS: OPTIONS[] = [
  { value: "experience", label: "Experience" },
  { value: "education", label: "Education" },
  { value: "about", label: "About Yourself" },
];

type Props = {
  setData: React.Dispatch<React.SetStateAction<Partial<ResumeFormType> | undefined>>
}

export type SectionItem = {
  id: string,
  type: string,
}

export function ResumeForm(props: Props) {
  const [form] = Form.useForm<ResumeFormType>();
  const [sections, setSections] = useState<SectionItem[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);



  const onValuesChange = () => {
    const values = form.getFieldsValue();
    props.setData(values);
  };

  const handleSelect = (value: string) => {
    setSelectedSection(value);
  };

  const handleAddSection = () => {
    if (selectedSection !== null && selectedSection !== "") {
      const newSection: SectionItem = {
        id: crypto.randomUUID(),
        type: selectedSection
      };
      setSections([...sections, newSection]);
      setSelectedSection(null);
    }
  };

  const handleDeleteSection = (id: string) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const filteredOptions = OPTIONS.filter(
    (option) => !sections.some((sections) => sections.type === option.value)
  );

  const moveSection = (dragIndex: number, hoverIndex: number) => {
    setSections((prevSections) => {
      const updatedSections = [...prevSections];
      const [removed] = updatedSections.splice(dragIndex, 1);
      updatedSections.splice(hoverIndex, 0, removed);
      return updatedSections;
    });
  };
  
  

  return (
    <>
      <Space>
        <Select
          value={selectedSection}
          onChange={handleSelect}
          placeholder="choose a section"
          style={{ width: 160 }}
          options={filteredOptions}
        />
        <Button type="primary" onClick={handleAddSection}>
          Add Section
        </Button>
      </Space>
      <Form form={form} onValuesChange={onValuesChange}>
          {sections.map((section, index) => {
            const commonProps = {
              id: section.id,
              index,
              moveSection,
            };

            switch (section.type) {
              case "experience":
                return (
                  <DraggableSection key={section.id} {...commonProps}>
                    <Card
                      title="Experience"
                      extra={
                        <DeleteOutlined
                          onClick={() => handleDeleteSection(section.id)}
                          style={{ cursor: "pointer" }}
                        />
                      }
                    >
                      <ExperienceCard />
                    </Card>
                  </DraggableSection>
                );
              case "education":
                return (
                  <DraggableSection key={section.id} {...commonProps}>
                    <Card
                      title="Education"
                      extra={
                        <DeleteOutlined
                          onClick={() => handleDeleteSection(section.id)}
                          style={{ cursor: "pointer" }}
                        />
                      }
                    >
                      <EducationCard />
                    </Card>
                  </DraggableSection>
                );
              case "about":
                return (
                  <DraggableSection key={section.id} {...commonProps}>
                    <Card
                      title="About Yourself"
                      extra={
                        <DeleteOutlined
                          onClick={() => handleDeleteSection(section.id)}
                          style={{ cursor: "pointer" }}
                        />
                      }
                    >
                      <AboutYourselfCard />
                    </Card>
                  </DraggableSection>
                );
            }
          })}
      </Form>
    </>
  );
}
