import { Form, Input } from "antd";

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 14,
  },
};

const FormInput = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      layout="vertical"
      // name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label={props.label} name={props.name} rules={props.rules}>
        <Input placeholder={props.placeholder} />
      </Form.Item>
    </Form>
  );
};

export default FormInput;
