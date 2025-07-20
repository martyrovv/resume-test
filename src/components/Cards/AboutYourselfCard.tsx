import { Form, Input, InputNumber } from 'antd';


export type AboutYourselfType = {
    name: string,
    email: string,
    age: number,
    website: string,
    introduction: string,

}



export function AboutYourselfCard() {




    return (
  <>
    <Form.Item name={["about", "name"]} label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name= {["about", "email"]} label="Email" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item name={["about", "age"]} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
      <InputNumber />
    </Form.Item>
    <Form.Item name={["about", "website"]} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={["about", "introduction"]} label="Introduction">
      <Input.TextArea />
    </Form.Item>
  </>
    )
}
