import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiIdComponent } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-IdComponent',
  component: PiIdComponent,
  argTypes: {
    label: {
      description: 'label for page'
    }
  }
} as ComponentMeta<typeof PiIdComponent>

const Template: ComponentStory<typeof PiIdComponent> = (args) => (
  <PiIdComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Test'
}
