import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  PiModal,
  PiModalBody,
  PiModalFooter,
  PiModalHeader,
  PiModalTitle,
  PiTypography,
  PiButton
} from 'pixel-kit'
import React, { useState } from 'react'

export default {
  title: 'Pixel-kit/Pi-Modal',
  component: PiModal,
  argTypes: {
    appearance: {
      options: ['danger', 'warning'],
      control: { type: 'select' },
      description: 'Appearance of the modal'
    },
    isMultiline: {
      description: 'Title of the modal is multipule lines'
    },
    isOpen: {
      description: 'is modal open'
    },
    height: {
      description: 'Height of the modal'
    },
    width: {
      description: 'width of the modal'
    },
    onClose: {
      description: 'Function to close the modal'
    }
  }
} as ComponentMeta<typeof PiModal>

const Template: ComponentStory<typeof PiModal> = (args) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <PiButton
        appearance='primary'
        label='Hello'
        onClick={() => setOpenModal(!openModal)}
      />
      <PiModal {...args} isOpen={openModal}>
        <PiModalHeader>
          <PiModalTitle appearance='danger'>
            <PiTypography component='h4'>Pixel-kit</PiTypography>
          </PiModalTitle>
        </PiModalHeader>
        <PiModalBody>
          <PiTypography component='p'>
            Hello! Welcome to Enterpi Software Solutions Pvt Ltd.
          </PiTypography>
        </PiModalBody>
        <PiModalFooter>
          <PiButton appearance='secondary' label='Cancel'  onClick={() => setOpenModal(!openModal)}/>
          <PiButton appearance='primary' label='Create' />
        </PiModalFooter>
      </PiModal>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
