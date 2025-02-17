import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiQuoteName } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-QuoteName',
  component: PiQuoteName,
  argTypes: {
    label: {
      description: 'Text bside the icon',
      control: { type: 'text' }
    },
    description: {
      description: 'Text bside the icon',
      control: { type: 'text' }
    },
    src:{
      description:'avatar image src url'
    },
  }
} as ComponentMeta<typeof PiQuoteName>

const Template: ComponentStory<typeof PiQuoteName> = (args) => (
  <PiQuoteName {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: "Lable Name",
  description : "Description Text"
}
