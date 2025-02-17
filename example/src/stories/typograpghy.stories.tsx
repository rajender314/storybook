import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiTypography } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-Typography',
  component: PiTypography,
  argTypes: {
    component: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'pbold',
        'th',
        'small',
        'xs',
        'caption',
        'label',
        'default'
      ],
      control: { type: 'select' },
      description: 'Style to use'
    },
    children: {
      description: 'Text to be displayed'
    }
  }
} as ComponentMeta<typeof PiTypography>

const Template: ComponentStory<typeof PiTypography> = (args) => (
  <PiTypography {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'This is sample text',
  component: 'h1'
}
