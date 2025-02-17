import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PiInput } from "pixel-kit";
import React from 'react';

export default {
  title: "Pixel-kit/Pi-Input",
  component: PiInput,
  argTypes: {
    libraryType: {
      options: ["atalskit", "default"],
      control: { type: "select" },
      description: "Library to use",
    },
    label: {
      description: "Label for the input",
    },
    name: {
      description: "Name for the input",
    },
    value: {
      description: "Value of the input",
    },
    defaultValue: {
      description: "Default Value of the input",
    },
    onKeyDown: {
      description: "Function for key down event",
      action: "onKeyDown",
    },
    helpText: {
      description: "Help Text under the input",
    },
    appearance: {
      options: ["standard", "none", "subtle"],
      control: { type: "select" },
      description: "Apperance of the Input",
    },
    isCompact: {
      description: "Height of the Input Field",
    },
    isDisabled: {
      description: "disable the Input Field",
    },
    isReadOnly: {
      description: "readonly the Input Field",
    },
    placeholder: {
      description: "placeholder of the Input Field",
      control: { type: "text" },
    },
    width: {
      description: "set width of the Input",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof PiInput>;

const Template: ComponentStory<typeof PiInput> = (args) => (
  <PiInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Input Label",
  name: "input",
  helpText: "Help Text under the input",
  isCompact: false,
  isDisabled: false,
  isReadOnly: false,
  libraryType: "atalskit",
};
