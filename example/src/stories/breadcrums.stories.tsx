import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiBreadCrumb } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Breadcrum",
  component: PiBreadCrumb,
  argTypes: {
    libraryType: {
      options: ["atalskit"],
      control: { type: "select" },
      description: "Library to use",
    },
  },
} as ComponentMeta<typeof PiBreadCrumb>;

const Template: ComponentStory<typeof PiBreadCrumb> = (args) => (
  <PiBreadCrumb {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Dashboard", href: "" },
    { label: "Create", href: "" }
  ],
};
