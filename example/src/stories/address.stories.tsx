import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiAddress } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-Address",
  component: PiAddress,
  argTypes: {
    label: {
        description: "Label for the Address",
      },
      data: {
        description: "Data of Address",
        control: { type: "object" },
      },
  
  },
} as ComponentMeta<typeof PiAddress>;

const Template: ComponentStory<typeof PiAddress> = (args) => <PiAddress {...args} />;


export const Default = Template.bind({});

Default.args = {
    label:"Customer Address",
    data:{
        address1: '1',
        address2: '123',
        street: 'steet name',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
        zip: 500062
    }
  };
  