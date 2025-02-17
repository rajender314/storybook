import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiAttachments } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-Attachments',
  component: PiAttachments,
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
} as ComponentMeta<typeof PiAttachments>

const Template: ComponentStory<typeof PiAttachments> = (args) => (
  <PiAttachments {...args} />
)

export const Default = Template.bind({})
Default.args = {
  attachmentItem: {
    id: 1,
    name: 'Invoice.pdf',
    thumbnail: '',
    downloadUrl: '',
    type: 'pdf',
    largeimage:'',
    size:''
  }
}
