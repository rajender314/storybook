import React from 'react'
import { Tab } from '@atlaskit/tabs'

class PiTabHeaderProps {}

function PiTabHeader(props: React.PropsWithChildren<PiTabHeaderProps>) {
  return <Tab>{props.children}</Tab>
}

export default React.memo(PiTabHeader)
