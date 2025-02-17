import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiDateTimePicker } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Date and Time Picker",
  component: PiDateTimePicker,
  argTypes: {
    libraryType: {
      options: ["atalskit", "default"],
      control: { type: "select" },
      description: "Library to use",
    },
    label: {
      description: "Label for the date and time picker",
    },
    name: {
      description: "Name for the date and time picker",
    },
    onKeyDown: {
      description: "Function for key down event",
      action: "onKeyDown",
    },
    helpText: {
      description: "Help Text under the date and time picker",
    },
    appearance: {
      options: ["standard", "none", "subtle"],
      control: { type: "select" },
      description: "Apperance of the date and time picker",
    },
    isDisabled: {
      description: "disable the date and time picker",
    },
    placeholder: {
      description: "placeholder of the date and time picker",
      control: { type: "text" },
    },
    dateFormat: {
      description: "Date format of the date and time picker",
      control: { type: "text" },
    },
    timeFormat: {
      description: "Time format of the date and time picker",
      control: { type: "text" },
    },
    value: {
      description: "value of the date and time picker",
      control: { type: "text" },
    },
    onChange: {
      description: "Function for on value change event",
      action: "onChange",
    },
    minDate: {
      description: "minimum date of the date and time picker",
      control: { type: "text" },
    },
    maxDate: {
      description: "maximum date of the date and time picker",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof PiDateTimePicker>;

const Template: ComponentStory<typeof PiDateTimePicker> = (args) => (
  <PiDateTimePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Date Picker Label",
  name: "datePicker",
  helpText: "",
  isDisabled: false,
  libraryType: "atalskit",
  dateFormat: "MM/DD/YYYY",
  timeFormat: "HH:MM",
  isOpen:true
};
