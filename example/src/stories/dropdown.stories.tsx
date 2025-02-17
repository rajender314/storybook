import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiDropdownMenu } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-DropdownMenu",
  component: PiDropdownMenu,
  argTypes: {
    label: {
        description: "Label for the Address",
      },
      items: {
        description: "Items of DropdownMenu",
        control: { type: "array" },
      },
      onOpenChange: {
        description: "Function for changing the value",
        action: "onOpenChange",
      },
  
  },
} as ComponentMeta<typeof PiDropdownMenu>;

const Template: ComponentStory<typeof PiDropdownMenu> = (args) => <PiDropdownMenu {...args} />;

export const Default = Template.bind({}); 

Default.args = {
    label:"Page Trigger",
         items:[
           {
            id:1,
            name: 'Test1'
           },
           {
            id:2,
            name: 'Test2'
           }
        ]
  };
  