import { Form, Input, InputNumber } from 'antd';



const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

type AboutYourselfType = {
    name: string,
    email: string,
    age: number,
    website: string,
    introduction: string,

}



export function AboutYourselfCard() {

    const [form] = Form.useForm<AboutYourselfType>();


    return (
  <Form
    form={form}
    name="nest-messages"
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name='name' label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name= 'email' label="Email" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item name='age' label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
      <InputNumber />
    </Form.Item>
    <Form.Item name='website' label="Website">
      <Input />
    </Form.Item>
    <Form.Item name='introduction' label="Introduction">
      <Input.TextArea />
    </Form.Item>
  </Form>
    )
}
