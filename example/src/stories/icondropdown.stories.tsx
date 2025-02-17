import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiIconDropdownMenu, PiActionIcon } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-IconDropdownMenu',
  component: PiIconDropdownMenu,
  argTypes: {
    label: {
      description: 'Label for the Address'
    },
    items: {
      description: 'Items of DropdownMenu',
      control: { type: 'array' }
    },
    onOpenChange: {
      description: 'Function for changing the value',
      action: 'onOpenChange'
    }
  }
} as ComponentMeta<typeof PiIconDropdownMenu>

const Template: ComponentStory<typeof PiIconDropdownMenu> = (args) => (
  <PiIconDropdownMenu {...args} />
)

export const Default = Template.bind({})

Default.args = {
  items: [
    {
      id: '1',
      element: (
        <PiActionIcon
          appearance='download'
          onClick={function noRefCheck() {}}
        />
      )
    },
    {
      id: '2',
      element: (
        <PiActionIcon appearance='filter' onClick={function noRefCheck() {}} />
      )
    }
  ]
}
