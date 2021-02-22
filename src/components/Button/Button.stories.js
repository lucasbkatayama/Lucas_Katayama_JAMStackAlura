import React from 'react';

import Button from './Button';

export default {
  title: 'Example/Header',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  user: {},
};
