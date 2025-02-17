import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiTooltip, PiButton } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-Tooltip',
  component: PiTooltip,
  argTypes: {
    libraryType: {
      options: ['atalskit'],
      control: { type: 'select' },
      description: 'Library to use'
    },
    position: {
      description: 'Position of the tooltip',
      control: { type: 'text' }
    },
    content: {
      description: 'Content of the tooltip',
      control: { type: 'text' }
    },
    children: {
      description: 'children can be any element'
    }
  }
} as ComponentMeta<typeof PiTooltip>

const Template: ComponentStory<typeof PiTooltip> = (args) => (
  <PiTooltip {...args} />
)

export const Default = Template.bind({})
Default.args = {
  libraryType: 'atalskit',
  children: <PiButton appearance='primary' label='Hello' />,
  content: 'hello world',
}
