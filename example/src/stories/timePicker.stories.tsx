import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiTimePicker } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-TimePicker',
  component: PiTimePicker,
  argTypes: {
    libraryType: {
      options: ['atalskit', 'material', 'default'],
      control: { type: 'select' },
      description: 'Library to use'
    },
    label: {
      description: 'Label for the time picker'
    },
    name: {
      description: 'Name for the time picker'
    },
    onKeyDown: {
      description: 'Function for key down event',
      action: 'onKeyDown'
    },
    helpText: {
      description: 'Help Text under the time picker'
    },
    appearance: {
      options: ['standard', 'none', 'subtle'],
      control: { type: 'select' },
      description: 'Apperance of the time picker'
    },
    isDisabled: {
      description: 'disable the time picker'
    },
    placeholder: {
      description: 'placeholder of the time picker',
      control: { type: 'text' }
    },
    timeFormat: {
      description: 'Time format of the time picker',
      control: { type: 'text' }
    },
    value: {
      description: 'value of the time picker',
      control: { type: 'text' }
    },
    onChange: {
      description: 'Function for on value change event',
      action: 'onChange'
    }
  }
} as ComponentMeta<typeof PiTimePicker>

const Template: ComponentStory<typeof PiTimePicker> = (args) => (
  <PiTimePicker {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'time Picker Label',
  name: 'timePicker',
  helpText: '',
  isDisabled: false,
  libraryType: 'atalskit',
  timeFormat: 'hh:mm A'
}
