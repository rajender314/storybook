import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiLozenge } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-Lozenge',
  component: PiLozenge,
  argTypes: {
    appearance: {
      options: ['default', 'inprogress', 'moved', 'new', 'removed', 'success'],
      control: { type: 'select' },
      description: 'Apperance to use'
    },
    isBold: {
      description: 'makes the text to bold'
    },
    children: {
      description: 'children can be any element'
    },
    maxWidth: {
      description: 'maximum width of the lozenge',
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof PiLozenge>

const Template: ComponentStory<typeof PiLozenge> = (args) => (
  <PiLozenge {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isBold: false,
  children: 'Hey welcome',
  maxWidth: '100px'
}
