import React from 'react';
import { Form, Input } from 'antd';
import { Rule } from 'antd/es/form';

interface IProps {
  name: string;
  label: string;
  rules?: Rule[];
  children?: React.ReactNode;
}

const FormInput = ({ name, label, rules, children }: IProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      {children ?? <Input />}
    </Form.Item>
  );
};

export default FormInput;
