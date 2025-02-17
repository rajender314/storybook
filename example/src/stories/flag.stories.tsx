import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiFlag } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-Flag',
  component: PiFlag,
  argTypes: {
    libraryType: {
      options: ['default','atalskit'],
      control: { type: 'select' },
      description: 'Library to use'
    },
    title: {
      description: 'title of the flag',
      control: { type: 'text' }
    },
    description: {
      description: 'description of the flag',
      control: { type: 'text' }
    },
    id: {
      description: 'id of the flag'
    },
    appearance: {
      options: ['error', 'info', 'normal', 'success', 'warning'],
      control: { type: 'select' },
      description: 'appearance to use'
    }
  }
} as ComponentMeta<typeof PiFlag>

const Template: ComponentStory<typeof PiFlag> = (args) => <PiFlag {...args}>
   </PiFlag>

export const Default = Template.bind({})
Default.args = {
  id: '0',
  title: 'Hello',
  description: 'Welcome to pixel-kit',
  appearance: 'info'
}
