import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PiPasswordValidator} from "pixel-kit";
import React from 'react';

export default {
  title: "Pixel-kit/Pi-PasswordValidaor",
  component: PiPasswordValidator,
  argTypes: {
    
    password: {
      password: "Password input text",
      control: { type: "text" },
    },
    maxSize: {
      description: "Password text max size",
      control: { type: "number" },
    },
    minSize: {
      description: "Password text min size",
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof PiPasswordValidator>;

const Template: ComponentStory<typeof PiPasswordValidator> = (args) => (
  <PiPasswordValidator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  password: "password",
  minSize: 8,
  maxSize: 18
};
