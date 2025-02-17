import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiTag } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Tag",
  component: PiTag,
  argTypes: {
    color: {
      options: ["info", "success", "warning", "danger"],
      control: { type: "select" },
      description: "Color to use",
    },
    appearance: {
      options: ["default", "rounded"],
      control: { type: "select" },
      description: "Apperance to use",
    },
    text: {
      description: "Text to be displayed",
    },
  },
} as ComponentMeta<typeof PiTag>;

const Template: ComponentStory<typeof PiTag> = (args) => <PiTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "This is sample text",
  color:'info'
};
