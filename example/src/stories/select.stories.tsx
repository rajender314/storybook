import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiSelect } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Select",
  component: PiSelect,
  argTypes: {
    libraryType: {
      options: ["atalskit"],
      control: { type: "select" },
      description: "Library to use",
    },
    variant: {
      options: ["standard", "outlined", "filled"],
      control: { type: "select" },
      description: "apperance of the select",
    },
    label: {
      description: "Label for the select",
    },
    name: {
      description: "Name for the select",
    },
    helpText: {
      description: "Help Text under the select",
    },

    isDisabled: {
      description: "disable the select",
    },
    onChange: {
      description: "Function for changing the value",
      action: "onChange",
    },
    value: {
      description: "value of select",
      control: { type: "text" },
    },
    isMulti: {
      description: "select multiple values",
    },
    options: {
      description: "Options array of the dropdown menu",
      control: { type: "array" },
    },
  },
} as ComponentMeta<typeof PiSelect>;

const Template: ComponentStory<typeof PiSelect> = (args) => (
  <PiSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Select Label",
  name: "select",
  helpText: "Help Text under the select",
  isDisabled: false,
  libraryType: "atalskit",
  isMulti: false,
  placeholder: "select...",
  options: [
    { value: "1", label: "One" },
    { value: "2", label: "Two" },
  ],
};
