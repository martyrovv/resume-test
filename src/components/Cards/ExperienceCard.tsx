import { Form, Input, DatePicker} from "antd";

const { RangePicker } = DatePicker;

export type ExperienceCardType = {
  jobTitle: string;
  company: string;
  dates: [string, string];
  summary: string;
};

export function ExperienceCard() {
 
  return (
    <>
      <Form.Item
        name={["experience", "jobTitle"]}
        label="Job Title"
        rules={[{ required: true, message: "Please enter job title" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["experience", "company"]}
        label="Company"
        rules={[{ required: true, message: "Please enter company name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["experience", "dates"]}
        label="Dates"
        rules={[{ required: true, message: "Please select a date range" }]}
      >
        <RangePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item 
        name={["experience", "summary"]} 
        label="Summary">
        <Input.TextArea rows={4} />
      </Form.Item>
    </>
  );
}
