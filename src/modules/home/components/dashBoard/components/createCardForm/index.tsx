import React from 'react';
import { Button, Form, Select } from 'antd';

import { IItemsCards, TStatusToDO } from '../../../../types';
import FormInput from '../../../../../common/components/formInput';
import {
  CREATE_FORM_FOLDERS,
  formItemLayout,
  tailFormItemLayout,
} from './constants';
import { STATUSES, TYPES } from '../../../../../common/constants';
import { setNewItem } from '../../../../../common/services';

const { Option } = Select;

interface IProps {
  status: TStatusToDO;
  setItems: React.Dispatch<React.SetStateAction<IItemsCards[]>>;
  handleCancel: () => void;
}

const CreateCardForm = ({ status, setItems, handleCancel }: IProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: IItemsCards) => {
    setItems((prevState) => {
      const newItems = prevState.concat({
        ...values,
        images: [],
        id: prevState.length + 2,
      });
      setNewItem('items', JSON.stringify(newItems));

      return [...newItems];
    });
    form.resetFields();
    handleCancel();
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="create"
      onFinish={onFinish}
      initialValues={{
        status,
      }}
      scrollToFirstError>
      {CREATE_FORM_FOLDERS.map(({ name, label, rules }) => (
        <FormInput key={name} name={name} label={label} rules={rules} />
      ))}

      <FormInput
        name="status"
        label="Status"
        rules={[{ required: true, message: 'Please select status!' }]}>
        <Select placeholder="select status">
          {STATUSES.map((el) => (
            <Option key={el} value={el}>
              {el}
            </Option>
          ))}
        </Select>
      </FormInput>

      <Form.Item
        name="type"
        label="Type"
        rules={[{ required: false, message: 'Please select type!' }]}>
        <Select placeholder="select status">
          {TYPES.map((el) => (
            <Option key={el} value={el}>
              {el}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCardForm;
