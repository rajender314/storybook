import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PiDrawer } from 'pixel-kit'


export default {
  title: 'Pixel-kit/Pi-Drawer',
  component: PiDrawer,
  argTypes: {
     width: {
        options: ['wide' , 'narrow' , 'medium' , 'full' , 'extended'],
        control: { type: 'select' },
        description: 'width to use'
      },
    onClose: {
      description: 'Event fired for closing of Drawer'
    },
    children: {
      description: 'children can be any element'
    }
  }
} as ComponentMeta<typeof PiDrawer>

const Template: ComponentStory<typeof PiDrawer> = (args) => (
<PiDrawer {...args}>
    Hello
</PiDrawer>
)

export const Default = Template.bind({})
Default.args = {
    isOpen:false,
    width: 'wide'
}
