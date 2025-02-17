import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  PiAccordian,
  PiAccordianItem,
  PiAccordianHeader,
  PiAccordianPanel
} from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-Accordian',
  component: PiAccordian,
  argTypes: {
   
    onChange: {
      description: 'Event fired on change of page number'
    },
    children: {
      description: 'children can be any element'
    }
  }
} as ComponentMeta<typeof PiAccordian>

const Template: ComponentStory<typeof PiAccordian> = (args) => (
  <PiAccordian {...args}>
      <PiAccordianItem>
      <PiAccordianHeader>
          Header
          </PiAccordianHeader>
          <PiAccordianPanel>
         <p>Address 1</p>
          </PiAccordianPanel>
    </PiAccordianItem>
  </PiAccordian>

)

export const Default = Template.bind({})
Default.args = {
    allowMultipleExpanded:true,
     allowZeroExpanded:true
}
