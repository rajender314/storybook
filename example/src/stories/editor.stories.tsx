import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiEditor } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Editor",
  component: PiEditor,
  argTypes: {
    libraryType: {
      options: ["atalskit", "material"],
      control: { type: "select" },
      description: "Library to use",
    },
    value: {
      control: { type: "textarea" },
      description: "Value for the editor",
    },
    onChange: {
      description: "Function for onChange event",
      action: "onChange"
    }
  },
} as ComponentMeta<typeof PiEditor>;

const Template: ComponentStory<typeof PiEditor> = (args) => (
  <PiEditor {...args} />
);

export const Default = Template.bind({});
Default.args = { 
  libraryType: "atalskit",
  value:''
};
