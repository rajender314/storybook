import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PiSideDrawer } from "pixel-kit";

export default {
  title: "Pixel-kit/Pi-SideDrawer",
  component: PiSideDrawer,
  argTypes: {
    width: {
      options: ['wide' , 'narrow' , 'medium' , 'full' , 'extended'],
      control: { type: 'select' },
      description: 'width to use'
    },
    isOpen: {
      description: "",
    },
    onClose: {
      description: 'Event fired for closing of Drawer'
    },
    onBackdropClose:{
      description: 'Event fired for closing of Drawer when click on backdrop.'
    },
    children: {
      description: 'Drawer content HTML',
      control: { type: 'html' },
    }
      
  
  },
} as ComponentMeta<typeof PiSideDrawer>;

const Template: ComponentStory<typeof PiSideDrawer> = (args) => (
  <PiSideDrawer {...args} />
)

export const Default = Template.bind({});

Default.args = {
    width:'medium',
    isOpen: false,
    children: <p>welcome to pixel-kit</p>
  };
  