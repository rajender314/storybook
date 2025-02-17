import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiActionIcon } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-ActionIcons',
  component: PiActionIcon,
  argTypes: {
    appearance: {
      options: ['download', 'print', 'sort', 'filter', 'mail', 'more'],
      control: { type: 'select' },
      description: 'Apperance to use'
    },
    icontext: {
      description: 'Text bside the icon',
      control: { type: 'text' }
    },
    onClick:{
      description:'Event to fire onClick'
    },
  }
} as ComponentMeta<typeof PiActionIcon>

const Template: ComponentStory<typeof PiActionIcon> = (args) => (
  <PiActionIcon {...args} />
)

export const Default = Template.bind({})
Default.args = {
  appearance: "download"
}
