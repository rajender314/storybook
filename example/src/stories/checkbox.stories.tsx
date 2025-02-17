import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from 'react';
import { PiCheckbox } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Checkbox",
  component: PiCheckbox,
  argTypes: {
    libraryType: {
      options: ["atalskit",  "default"],
      control: { type: "select" },
      description: "Library to use",
    },
    label: {
      description: "Label for the checkbox",
    },
    name: {
      description: "Name for the checkbox",
    },
    helpText: {
      description: "Help Text under the checkbox",
    },

    isDisabled: {
      description: "disable the checkbox",
    },
    isChecked: {
      description: "check or uncheck the checkbox",
    },
    onChange: {
      description: "Function for changing the value",
      action: "onChange",
    },
    value: {
      description: "value of checkbox",
      control: { type: "text" },
    },
    size: {
      options: ["small", "medium","large"],
      control: { type: "select" },
      description: "Size of the chekbox",
    },
  },
} as ComponentMeta<typeof PiCheckbox>;

const Template: ComponentStory<typeof PiCheckbox> = (args) => (
  <PiCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Checkbox Label",
  name: "checkbox",
  helpText: "",
  isDisabled: false,
  libraryType: "atalskit",
  isChecked: true,
};
