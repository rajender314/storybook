import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiProfileSection } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-ProfileSection",
  component: PiProfileSection,
  argTypes: {
   
    items: {
      description: "Options array of the Profile menu",
      control: { type: "array" },
    },
  },
} as ComponentMeta<typeof PiProfileSection>;

const Template: ComponentStory<typeof PiProfileSection> = (args) => (
  <PiProfileSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  libraryType: "atalskit",
  items: [
    { id: "1", name: "Profile",route:"",url:"" },
    { id: "2", name: "Log Out",route:"",url:"" },
  ],
};
