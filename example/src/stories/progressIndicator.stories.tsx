import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiProgressIndicator } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-ProgressIndicator',
  component: PiProgressIndicator,
  argTypes: {
    appearance: {
      options: ['default', 'help', 'inverted', 'primary'],
      control: { type: 'select' },
      description: 'Apperance to use'
    },
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'select' },
      description: 'Size of the progress indicator'
    },
    spacing: {
      options: ['comfortable', 'cozy', 'compact'],
      control: { type: 'select' },
      description: 'Spacing of the progress indicator'
    },
    values: {
      description: 'Values of the progress indicator'
    },
    selectedIndex: {
      description: 'Selected Index of the progress indicator',
      control: { type: 'number' }
    }
  }
} as ComponentMeta<typeof PiProgressIndicator>

const Template: ComponentStory<typeof PiProgressIndicator> = (args) => (
  <PiProgressIndicator {...args} />
)

export const Default = Template.bind({})
Default.args = { selectedIndex: 0, values: ['first', 'second', 'third'] }
