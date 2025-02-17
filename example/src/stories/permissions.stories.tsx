import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiPermissions } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-Permissions',
  component: PiPermissions,
  argTypes: {
  }
} as ComponentMeta<typeof PiPermissions>

const Template: ComponentStory<typeof PiPermissions> = (args) => (
  <PiPermissions {...args} />
)

export const Default = Template.bind({})
Default.args = {
  inputObject: {
    "id": 1,
    "name": "Users ",
    "type": "toggle",
    "value": "1",
    "code": "users",
    "help": "can be easily",
    "children": [
      {
    "id": 1,
    "name": "Users Eidit",
    "type": "radio",
    "value": "0",
    "code": "user_edit",
    "help": "can be easily",
    "children": [
    ],
    "options": [
      {
        name:'user_edit',
        label: 'Yes',
        value: '1'
      },
      {
        name:'user_edit',
        label: 'No',
        value: '0'
      }
    ]
  },
  {
    "id": 1,
    "name": "Users Delete",
    "type": "button",
    "value": "1",
    "code": "user_delete",
    "help": "can be easily",
    "children": [
    ],
    "options": [
      {
        name:'user_delete',
        label: 'Yes',
        value: '1'
      },
      {
        name:'user_delete',
        label: 'No',
        value: '0'
      }
    ]
  }
    ],
    "options": [
      {
        label: 'Yes',
        value: '1'
      },
      {
        label: 'No',
        value: '0'
      }
    ]
  }
}
