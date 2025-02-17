import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiButton } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-Button',
  component: PiButton,
  argTypes: {
    libraryType: {
      options: ['atalskit', 'default'],
      control: { type: 'select' },
      description: 'Library to use'
    },
    size: {
      options: ['xs', 'small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'Padding of the button'
    },
    appearance: {
      options: ['primary', 'secondary', 'link'],
      control: { type: 'select' },
      description: 'style of the button'
    },
    type: {
      options: ['submit', 'button', 'reset'],
      control: { type: 'select' },
      description: 'Button type'
    },
    onClick: {
      action: 'clicked',
      description: 'Function for click event'
    },
    label: {
      description: 'Label for the Button'
    },
    isDisabled: {
      description: 'controls the disable state of button'
    },
    shouldFitContainer: {
      description: 'controls the width of button'
    },
    isLoading: {
      description: 'shows the loading spinner'
    }
  }
} as ComponentMeta<typeof PiButton>

const Template: ComponentStory<typeof PiButton> = (args) => (
  <PiButton {...args} />
)

const commonOptions = {
  isDisabled: false,
  shouldFitContainer: false,
  isLoading: false,
  libraryType: 'atalskit'
}
export const Primary = Template.bind({})
Primary.args = {
  appearance: 'primary',
  label: 'Primary',
  ...commonOptions
}
