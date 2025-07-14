import { Select, Button, Space, Card, Form } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ExperienceCard } from "./Cards/ExperienceCard";
import { EducationCard } from "./Cards/EducationCard";
import { AboutYourselfCard } from "./Cards/AboutYourselfCard";
import type { ExperienceCardType } from "./Cards/ExperienceCard";
import type { EducationCardType } from "./Cards/EducationCard";
import type { AboutYourselfType } from "./Cards/AboutYourselfCard";

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
  setData: () => {}
}

export function ResumeForm(props: Props) {
  const [form] = Form.useForm<ResumeFormType>();
  const [sections, setSections] = useState<string[]>([]);
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
      setSections([...sections, selectedSection]);
      setSelectedSection(null);
    }
  };

  const handleDeleteSection = (value: string) => {
    setSections(sections.filter((section) => section !== value));
  };

  const filteredOptions = OPTIONS.filter(
    (option) => !sections.includes(option.value)
  );

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
            switch (section) {
              case "experience":
                return (
                  <li key={index}>
                    <Card
                      title="Experience"
                      extra={
                        <DeleteOutlined
                          onClick={() => handleDeleteSection(section)}
                          style={{ cursor: "pointer" }}
                        />
                      }
                    >
                      <ExperienceCard />
                    </Card>
                  </li>
                );
              case "education":
                return (
                  <li key={index}>
                    <Card
                      title="Education"
                      extra={
                        <DeleteOutlined
                          onClick={() => handleDeleteSection(section)}
                          style={{ cursor: "pointer" }}
                        />
                      }
                    >
                      <EducationCard />
                    </Card>
                  </li>
                );
              case "about":
                return (
                  <li key={index}>
                    <Card
                      title="About Yourself"
                      extra={
                        <DeleteOutlined
                          onClick={() => handleDeleteSection(section)}
                          style={{ cursor: "pointer" }}
                        />
                      }
                    >
                      <AboutYourselfCard />
                    </Card>
                  </li>
                );
            }
          })}
        </ul>
      </Form>
    </>
  );
}
