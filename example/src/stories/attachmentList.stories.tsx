import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiAttachmentList } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-AttachmentList',
  component: PiAttachmentList,
  argTypes: {
    onClickPreview: {
      action: 'clicked',
      description: 'Function for click event to view preview'
    },
    onClickDelete: {
      action: 'clicked',
      description: 'Function for click event to delete'
    },
    onClickDownload: {
      action: 'clicked',
      description: 'Function for click event to download'
    }
  }
} as ComponentMeta<typeof PiAttachmentList>

const Template: ComponentStory<typeof PiAttachmentList> = (args) => (
  <PiAttachmentList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  attachmentItems: [
    {
      id: 1,
      name: 'Invoice.xlsx',
      thumbnail: 'https://picsum.photos/200/300',
      downloadUrl: 'https://picsum.photos/200/300',
      type: 'xlsx',
      largeimage:"https://picsum.photos/200/300",
      size:''
    },
    {
      id: 2,
      name: 'Invoice.ppt',
      thumbnail: '',
      downloadUrl: '',
      type: 'ppt',
      largeimage:"",
      size:''
    }
  ]
}
