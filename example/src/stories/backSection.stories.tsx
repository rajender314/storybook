import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiBackSection } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-BackSection',
  component: PiBackSection,
  argTypes: {
   backOptions:{
    description: 'options for the back button'
   }
  }
} as ComponentMeta<typeof PiBackSection>

const Template: ComponentStory<typeof PiBackSection> = (args) => (
  <PiBackSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  backOptions:{
    name:"Quote001",
    route:"/rakesh"
  }
}
