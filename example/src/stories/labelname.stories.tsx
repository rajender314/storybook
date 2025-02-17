import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiLabelName } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-LabelName',
  component: PiLabelName,
  argTypes: {
    label: {
      description: 'Text bside the icon',
      control: { type: 'text' }
    },
    description: {
      description: 'Text bside the icon',
      control: { type: 'text' }
    },
  }
} as ComponentMeta<typeof PiLabelName>

const Template: ComponentStory<typeof PiLabelName> = (args) => (
  <PiLabelName {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: "Lable Name",
  description : "Description Text"
}
