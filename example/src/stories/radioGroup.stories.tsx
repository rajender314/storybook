import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiRadioGroup } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-RadioGroup",
  component: PiRadioGroup,
  argTypes: {
    libraryType: {
      options: ["atalskit", "material"],
      control: { type: "select" },
      description: "Library to use",
    },
    label: {
      description: "Label for the radio",
    },
    name: {
      description: "Name for the radio",
    },
    helpText: {
      description: "Help Text under the radio",
    },

    isDisabled: {
      description: "disable the radio",
    },
    onChange: {
      description: "Function for changing the value",
      action: "onChange",
    },
    value: {
      description: "value of radio",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof PiRadioGroup>;

const Template: ComponentStory<typeof PiRadioGroup> = (args) => (
  <PiRadioGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Radio Label",
  name: "radio",
  helpText: "Help Text under the radio",
  isDisabled: false,
  libraryType: "atalskit",
  options: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ],
};
