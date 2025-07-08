import { Form, Input, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

type EducationCardType = {
    educationalInstitution: string;
    major: string;
    dates: any;
  };


export function EducationCard() {

    const [form] = Form.useForm<EducationCardType>();

    return (
        <Form
            form={form}
            layout="vertical"
            style={{ marginTop: 16 }}
        >
            <Form.Item
                 name="educationalInstitution"
                 label="Education Institution"
                 rules={[{ required: true, message: "Please enter education institution" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                 name="major"
                 label="Major"
                 rules={[{ required: true, message: "Please enter major" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
        name="dates"
        label="Dates"
        rules={[{ required: true, message: "Please select a date range" }]}
      >
        <RangePicker style={{ width: "100%" }} />
      </Form.Item>

        </Form>
    )
}