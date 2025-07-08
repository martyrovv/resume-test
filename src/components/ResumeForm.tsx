import { Select, Button, Space, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ExperienceCard } from "./Cards/ExperienceCard";
import { EducationCard } from "./Cards/EducationCard";
import { AboutYourselfCard } from "./Cards/AboutYourselfCard";


type OPTIONS = {
    value: string;
    label: string;
  };
  
  const OPTIONS: OPTIONS[] = [
    { value: "experience", label: "Experience" },
    { value: "education", label: "Education" },
    { value: "about", label: "About Yourself" },
  ];

export function ResumeForm() {

    const [sections, setSections] = useState<string[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

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
                    >
                      <ExperienceCard />
                    </Card>
                    </li>
                  );
                  case "education":
                  return (
                    <li key={index}>
                      
                    <Card title="Education"
                    extra={
                      <DeleteOutlined
                        onClick={() => handleDeleteSection(section)}
                        style={{ cursor: 'pointer' }}
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
                      
                    <Card title="About Yourself"
                    extra={
                      <DeleteOutlined
                        onClick={() => handleDeleteSection(section)}
                        style={{ cursor: 'pointer' }}
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
        </Space>
      </div>
    )
}