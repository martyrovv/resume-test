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
<<<<<<< HEAD
  value: string;
  label: string;
};

const OPTIONS: OPTIONS[] = [
  { value: "experience", label: "Experience" },
  { value: "education", label: "Education" },
  { value: "about", label: "About Yourself" },
];

type Props = {
  setData: () => {}
}

type SectionItem = {
  id: string,
  type: string,
}

export function ResumeForm(props: Props) {
  const [form] = Form.useForm<ResumeFormType>();
  const [sections, setSections] = useState<SectionItem[]>([]);
=======
    value: string;
    label: string;
  };

type ExperienceCardType = {
  jobTitle: string;
  company: string;
  date: any
  summary: string;
};
  
type EducationCardType = {
    educationalInstitution: string;
    major: string;
    dates: any;
};

  const OPTIONS: OPTIONS[] = [
    { value: "experience", label: "Experience" },
    { value: "education", label: "Education" },
    { value: "about", label: "About Yourself" },
  ];

type ResumeFormType = {
  experience: ExperienceCardType;
  education: EducationCardType;
}

/** { 
 *    experience: { 
 *       jobTitle: "developer",
 *        company: ""
 *    },
 *    education: {
 *      dates: []
 *    }
 * } 
 * */

// type ResumeFormType = ExperienceCardType & EducationCardType;

// {
//   /** все поля из ExperienceCardType */
//   jobTitle: "developer",
//   company: "",
//   /** все поля из EducationCardType */
//   dates: [],
// }

export function ResumeForm() {
  const [form] = Form.useForm<ResumeFormType>();
  
  const [sections, setSections] = useState<string[]>([]);
>>>>>>> 8436b71a69770edc28f660e34f81137cfa9b922f
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
  //очистку данных формы для конкретной секции 

  const filteredOptions = OPTIONS.filter(
    (option) => !sections.some((sections) => sections.type === option.value)
  );

<<<<<<< HEAD
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
        <ul>
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
=======
  const onValuesChange = () => {
    const values = form.getFieldsValue();
    console.log(values);
  };


    return (
        <div>
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
          <Form form={form} 
          onValuesChange={onValuesChange}
          >
          <ul>
            {sections.map((section, index) => {
              switch (section) {
                case "experience":
                  return (
                    <li key={index}>
                      
                    <Card title="Experience"
                    extra={
                      <DeleteOutlined
                        onClick={() => handleDeleteSection(section)}
                        style={{ cursor: 'pointer' }}
                      />
                    }
>>>>>>> 8436b71a69770edc28f660e34f81137cfa9b922f
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
        </ul>
      </Form>
    </>
  );
}
