import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiToggle } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Toggle",
  component: PiToggle,
  argTypes: {
    size: {
      options:['large', 'regular'],
      description: "Size of the Toggle Component",
      control: { type: "select" },
    },
    name: {
      description: "Name of the component",
    },
    label:{
      description: "Label to Display",
    },
    isDisabled: {
      description: "disable the Toggle Component",
    },
    isChecked: {
      description: "To Check the Toggle Component",
    },
    helpText: {
      description: "Help Text under the component",
    },
    direction: {
      options:['row', 'column'],
      description: "Direction to display label and toggle",
      control: { type: "select" },
    },
    onChange: {
      description: "Event fired on change of page number",
    },
  },
} as ComponentMeta<typeof PiToggle>;

const Template: ComponentStory<typeof PiToggle> = (args) => <PiToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  size:  'regular',
  name: "toggle",
  label:'Are you Available?',
  isDisabled : false,
  isChecked : false,
  helpText : 'NO/YES',
  direction :  'row'
};
