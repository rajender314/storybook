import React from 'react'
import { TabList } from '@atlaskit/tabs'
import PiTabHeader from './tabHeader'

class PiTabsProps {
  items?: string[]
}
function PiTabHeaderPanel(props: React.PropsWithChildren<PiTabsProps>) {
  return (
    <TabList>
      {props.children}
      {props.items &&
        props.items.map((row: string) => <PiTabHeader>{row}</PiTabHeader>)}
    </TabList>
  )
}

export default React.memo(PiTabHeaderPanel)
