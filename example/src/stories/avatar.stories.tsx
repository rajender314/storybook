import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiAvatar } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Avatar",
  component: PiAvatar,
  argTypes: {
    size: {
      options: ['xsmall' , 'small' , 'medium' , 'large' , 'xlarge' , 'xxlarge'],
      control: { type: "select" },
      description: "Size of avatar",
    },
    appearance: {
      options: ["circle", "square"],
      control: { type: "select" },
      description: "Apperance to use",
    },
    presence: {
      options: ['online' , 'offline' , 'busy' , 'focus'],
      control: { type: "select" },
      description: "Apperance to use",
    },
    isDisabled: {
      description: "Disable",
    },
    onClick:{
      description:'Event to fire onClick'
    },
    src:{
      description:'src'
    },
    borderColor:{
      description:'borderColor'
    },
    status:{
      options:[ 'approved' , 'declined' , 'locked'],
      description:'Status',
      control: { type: "select" }
    },
    target: {
      options: ['_blank' , '_self' , '_top' , '_parent'],
      control: { type: "select" },
      description: "Target",
    },

  },
} as ComponentMeta<typeof PiAvatar>;

const Template: ComponentStory<typeof PiAvatar> = (args) => <PiAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
 appearance:"circle"
};
