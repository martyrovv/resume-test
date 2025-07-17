import { Form, Input, DatePicker} from "antd";

const { RangePicker } = DatePicker;

export type ExperienceCardType = {
  jobTitle: string;
  company: string;
  dates: any
  summary: string;
};

export function ExperienceCard() {
<<<<<<< HEAD
 
  return (
    <>
      <Form.Item
        name={["experience", "jobTitle"]}
=======
  return (
    <>
      <Form.Item
        name="experience.jobTitle"
>>>>>>> 8436b71a69770edc28f660e34f81137cfa9b922f
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
