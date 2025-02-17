import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiInvoice } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-Invoice',
  component: PiInvoice,
  argTypes: {
   invoiceOptions:{
    description: 'options for the invoice'
   }
  }
} as ComponentMeta<typeof PiInvoice>

const Template: ComponentStory<typeof PiInvoice> = (args) => (
  <PiInvoice {...args} />
)

export const Default = Template.bind({})
Default.args = {
  invoiceOptions:{
    packingCharges:"33",
    SGST:"20",
    CGST:"23",
    IGST:"50",
    Total:"500"
  }
}
