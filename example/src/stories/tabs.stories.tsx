import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  PiTabGroup,
  PiTabHeaderPanel,
  PiTabHeader,
  PiTabPanel
} from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-TabGroup',
  component: PiTabGroup,
  argTypes: {
    selected: {
      description: 'Selected index of the Tab from the TabGroup'
    },
    onChange: {
      description: 'Event fired on change of page number'
    },
    children: {
      description: 'children can be any element'
    }
  }
} as ComponentMeta<typeof PiTabGroup>

const Template: ComponentStory<typeof PiTabGroup> = (args) => (
  <PiTabGroup {...args}>
    <PiTabHeaderPanel>
      <PiTabHeader>Welcome-1</PiTabHeader>
      <PiTabHeader>Welcome-2</PiTabHeader>
      <PiTabHeader>Welcome-3</PiTabHeader>
    </PiTabHeaderPanel>
    <PiTabPanel></PiTabPanel>
    <PiTabPanel></PiTabPanel>
    <PiTabPanel></PiTabPanel>
  </PiTabGroup>
)

export const Default = Template.bind({})
Default.args = {
  id: 'tab',
  selected: 1
}
