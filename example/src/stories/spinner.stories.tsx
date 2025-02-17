import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiSpinner } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Spinner",
  component: PiSpinner,
  argTypes: {
    libraryType: {
      options: ["atalskit", "material"],
      control: { type: "select" },
      description: "Library to use",
    },
    appearance: {
      options: ["inherit", "invert"],
      control: { type: "select" },
      description: "Apperance of spinner",
    },
    size: {
      description: "Size of the spinner",
      control: { type: "number" },
    },
    color: {
      options: ["secondary", "inherit", "primary"],
      control: { type: "select" },
      description: "color of spinner",
    },
  },
} as ComponentMeta<typeof PiSpinner>;

const Template: ComponentStory<typeof PiSpinner> = (args) => (
  <PiSpinner {...args} />
);

export const Default = Template.bind({});
Default.args = { libraryType: "atalskit" };
