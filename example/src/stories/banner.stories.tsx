import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiBanner } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-Banner',
  component: PiBanner,
  argTypes: {
    appearance: {
      options: ['warning', 'error', 'announcement'],
      control: { type: 'select' },
      description: 'Apperance to use'
    },
    isOpen: {
      description: 'controls the open state of banner'
    },
    children: {
      description: 'children can be any element'
    },
    icon: {
      description: 'Icon to be shown left of the main content.'
    }
  }
} as ComponentMeta<typeof PiBanner>

const Template: ComponentStory<typeof PiBanner> = (args) => (
  <PiBanner {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  children: 'hello'
}
