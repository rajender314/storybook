import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiTextArea } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-TextArea",
  component: PiTextArea,
  argTypes: {
    libraryType: {
      options: ["atalskit", "material", "default"],
      control: { type: "select" },
      description: "Library to use",
    },
    label: {
      description: "Label for the textarea",
    },
    name: {
      description: "Name for the textarea",
    },
    onKeyDown: {
      description: "Function for key down event",
      action: "onKeyDown",
    },
    helpText: {
      description: "Help Text under the textarea",
    },

    isDisabled: {
      description: "disable the textarea",
    },

    isReadOnly: {
      description: "readonly the textarea",
    },
    placeholder: {
      description: "placeholder of the textarea",
      control: { type: "text" },
    },
    resize: {
      options: ["auto", "none", "vertical", "horizontal"],
      control: { type: "select" },
      description: "Resize type of the Textarea",
    },
    appearance: {
      options: ["standard", "none", "subtle"],
      control: { type: "select" },
      description: "Apperance of the textarea",
    },
    isCompact: {
      description:
        "Set whether the textarea should expand to fill available horizontal space.",
    },
    minimumRows: {
      description: "The minimum number of rows of text to display",
      control: { type: "number" },
    },
    maxHeight: {
      description: "max height of the textarea",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof PiTextArea>;

const Template: ComponentStory<typeof PiTextArea> = (args) => (
  <PiTextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Textarea Label",
  name: "textarea",
  helpText: "Help Text under the textarea",
  isDisabled: false,
  isReadOnly: false,
  isCompact: false,
  libraryType: "atalskit",
  minimumRows: 3,
};
