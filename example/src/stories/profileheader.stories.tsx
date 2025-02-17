import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiProfileHeader } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-ProfileHeader',
  component: PiProfileHeader,
  argTypes: {
    text: {
      description: 'Text bside the icon',
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof PiProfileHeader>

const Template: ComponentStory<typeof PiProfileHeader> = (args) => (
  <PiProfileHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  text: 'Header Text'
}
