import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiMultiAddress } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-MultiAddress',
  component: PiMultiAddress,
  argTypes: {
    billingLabel: {
      description: 'Label for the Billing Address'
    },
    shippingLabel: {
      description: 'Label for the Shipping Address'
    },
    data: {
      description: 'Data of Address',
      control: { type: 'object' }
    }
  }
} as ComponentMeta<typeof PiMultiAddress>

const Template: ComponentStory<typeof PiMultiAddress> = (args) => (
  <PiMultiAddress {...args} />
)

export const Default = Template.bind({})

Default.args = {
  billingLabel: 'Billing Address',
  shippingLabel: 'Shipping Address',
  data: {
    billing: {
      address1: '123',
      address2: '12345',
      city: 'Hyderabad',
      street: 'steet name',
      state: 'Telangana',
      country: 'India',
      zip: 500062
    },
    shipping: {
      address1: '22-33',
      address2: '678',
      city: 'Hyderabad',
      street: 'steet name',
      state: 'Telangana',
      country: 'India',
      zip: 508112
    }
  }
}
