import { Form, Input, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export type EducationCardType = {
    educationalInstitution: string;
    major: string;
    dates: any;
  };


export function EducationCard() {

    return (
        <>
            <Form.Item
                 name={["education", "educationalInstitution"]}
                 label="Educational Institution"
                 rules={[{ required: true, message: "Please enter education institution" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                 name={["education", "major"]}
                 label="Major"
                 rules={[{ required: true, message: "Please enter major" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
              name={["education", "dates"]}
              label="Dates"
              rules={[{ required: true, message: "Please select a date range" }]}
            >
        <RangePicker style={{ width: "100%" }} />
      </Form.Item>

        </>
    )
}