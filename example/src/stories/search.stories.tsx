import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PiSearch } from 'pixel-kit'
import React from 'react'

export default {
  title: 'Pixel-kit/Pi-Search',
  component: PiSearch,
  argTypes: {
    libraryType: {
      options: ['atalskit'],
      control: { type: 'select' },
      description: 'Library to use'
    },
    onKeyUp: {
      description: 'Function for key Up event',
      action: 'onKeyUp'
    },
    appearance: {
      options: ['standard', 'none', 'subtle'],
      control: { type: 'select' },
      description: 'Apperance of the Input'
    },
    isCompact: {
      description: 'Height of the Input Field'
    },
    isDisabled: {
      description: 'disable the Input Field'
    },
    placeholder: {
      description: 'placeholder of the Input Field',
      control: { type: 'text' }
    },
    width: {
      description: 'set width of the Input',
      control: { type: 'text' }
    },
    value: {
      description: 'value of the Input Field',
      control: { type: 'text' }
    },
    onValueChange: {
      description: 'on entering text of the Input Field'
    },
    onClear: {
      description: 'clearing the text of the Input Field'
    }
  }
} as ComponentMeta<typeof PiSearch>

const Template: ComponentStory<typeof PiSearch> = (args) => (
  <PiSearch {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isCompact: false,
  isDisabled: false,
  libraryType: 'atalskit',
}
