import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiDatePicker } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Date Picker",
  component: PiDatePicker,
  argTypes: {
    libraryType: {
      options: ["atalskit", "default"],
      control: { type: "select" },
      description: "Library to use",
    },
    label: {
      description: "Label for the date picker",
    },
    name: {
      description: "Name for the date picker",
    },
    onKeyDown: {
      description: "Function for key down event",
      action: "onKeyDown",
    },
    helpText: {
      description: "Help Text under the date picker",
    },
    appearance: {
      options: ["standard", "none", "subtle"],
      control: { type: "select" },
      description: "Apperance of the date picker",
    },
    isDisabled: {
      description: "disable the date picker",
    },
    isOpen: {
      description: "disable the date picker",
    },
    placeholder: {
      description: "placeholder of the date picker",
      control: { type: "text" },
    },
    dateFormat: {
      description: "Date format of the date picker",
      control: { type: "text" },
    },
    value: {
      description: "value of the date picker",
      control: { type: "text" },
    },
    onChange: {
      description: "Function for on value change event",
      action: "onChange",
    },
    minDate: {
      description: "minimum date of the date picker",
      control: { type: "text" },
    },
    maxDate: {
      description: "maximum date of the date picker",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof PiDatePicker>;

const Template: ComponentStory<typeof PiDatePicker> = (args) => (
  <PiDatePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Date Picker Label",
  name: "datePicker",
  helpText: "",
  isDisabled: false,
  minDate:"minDate",
  maxDate:"maxDate",
  libraryType: "atalskit",
  dateFormat: "MM/DD/YYYY",
};
