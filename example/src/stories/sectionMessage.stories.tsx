import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PiSectionMessage } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-SectionMessage',
  component: PiSectionMessage,
  argTypes: {
    appearance: {
      options: ['information', 'warning', 'error', 'success', 'discovery'],
      control: { type: 'select' },
      description: 'Apperance to use'
    },

    children: {
      description: 'children can be any element'
    },
    title: {
      description: 'Title of the section Message'
    }
  }
} as ComponentMeta<typeof PiSectionMessage>

const Template: ComponentStory<typeof PiSectionMessage> = (args) => (
  <PiSectionMessage {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: <p>welcome to pixel-kit</p>,
  title: 'Hello'
}
