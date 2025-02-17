import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PiPageHeader, PiBreadCrumb, PiButton, PiTypography } from 'pixel-kit'

export default {
  title: 'Pixel-kit/Pi-PageHeader',
  component: PiPageHeader,
  argTypes: {
    libraryType: {
      options: ['atalskit'],
      control: { type: 'select' },
      description: 'Library to use'
    },
    actions: {
      description: 'Actions on the page header'
    },
    breadcrumbs: {
      description: 'BreadCrumbs on the page header'
    },
    bottomBar: {
      description: 'bottomBar on the page header below the children'
    },
    children: {
      description: 'children can be any element'
    }
  }
} as ComponentMeta<typeof PiPageHeader>

const Template: ComponentStory<typeof PiPageHeader> = (args) => (
  <PiPageHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  breadcrumbs: (
    <PiBreadCrumb
      items={[
        { label: 'Dashboard', href: '' },
        { label: 'Create', href: '' }
      ]}
    />
  ),
  children: <PiTypography component='h3'>Pixel-kit</PiTypography>,
  actions: <PiButton appearance='primary' label='Primary Action' />
}
