export const CREATE_FORM_FOLDERS = [
  {
    name: 'title',
    label: 'Title',
    rules: [
      {
        required: true,
        message: 'Please input title!',
        whitespace: true,
      },
    ],
  },
  {
    name: 'epic',
    label: 'Epic',
    rules: [
      {
        required: true,
        message: 'Please input epic!',
        whitespace: true,
      },
    ],
  },
  {
    name: 'desc',
    label: 'Description',
    rules: [
      {
        required: false,
        message: 'Please input desccription!',
        whitespace: true,
      },
    ],
  },
];

export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
export const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
