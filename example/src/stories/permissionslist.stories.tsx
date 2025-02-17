import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiPermissionsList } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-PermissionsList',
  component: PiPermissionsList,
  argTypes: {
  }
} as ComponentMeta<typeof PiPermissionsList>

const Template: ComponentStory<typeof PiPermissionsList> = (args) => {
   
   // const handleClick = () =>{
   //    console.log(args.values)
   // }

   return (
   // <Fragment>
   <PiPermissionsList {...args} />
   // <button onClick={handleClick}>Submit</button>
//   </Fragment>
   )
}

export const Default = Template.bind({})
Default.args = {
   values:{
     1: true,
      2: {
         label:"Yes",
         value:"1"
      },
      3: '1',
      4: '0',
      5: '1',
      6: true,
      7: '2'
   },
  inputObject: [
    {
      "id":1,
      "name":"Users Management",
      "type":"header",
      "value":"1",
      "code":"users_management",
      "help":"can be easily",
      "children":[
      ],
      "options":[
      ]
   },
    {
       "id":2,
       "name":"Users ",
       "type":"select",
       "value":"1",
       "code":"users",
       "help":"can be easily",
       "children":[
          {
             "id":3,
             "name":"Users Eidit",
             "type":"radio",
             "value":"1",
             "code":"user_edit",
             "help":"can be easily",
             "children":[
                
             ],
             "options":[
                {
                   "label":"Yes",
                   "value":"1"
                },
                {
                   "label":"No",
                   "value":"2"
                }
             ]
          },
          {
             "id":4,
             "name":"Users Delete",
             "type":"button",
             "value":"1",
             "code":"user_delete",
             "help":"can be easily",
             "children":[
                
             ],
             "options":[
                {
                  "name":"user_delete",
                   "label":"Yes",
                   "value":"1"
                },
                {
                  "name":"user_delete",
                   "label":"No",
                   "value":"0"
                }
             ]
          },
          {
            "id":5,
            "name":"Users View",
            "type":"toggle",
            "value":"1",
            "code":"users_view",
            "help":"can be easily",
            "children":[
            ],
            "options":[
            ]
         }
       ],
       "options":[
         {
            label:"Yes",
            value:"1"
         },
         {
            label:"No",
            value:"2"
         }
       ]
    },
    {
      "id":6,
      "name":"Settings",
      "type":"checkbox",
      "value":"1",
      "code":"settings",
      "help":"can be easily",
      "children":[
      ],
      "options":[
      ]
   },

   {
      "id":7,
      "name":"Orders",
      "type":"button",
      "value":"1",
      "code":"orders",
      "help":"can be easily",
      "children":[
      ],
      "options":[
         {
            "name":"orders",
             "label":"View",
             "value":"1"
          },
          {
            "name":"orders",
             "label":"Edit",
             "value":"2"
          },
          {
            "name":"orders",
             "label":"None",
             "value":"3"
          }
      ]
   },
 ]
}
