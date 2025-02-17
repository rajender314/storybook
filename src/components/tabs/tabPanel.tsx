import React from 'react'
import { TabPanel } from '@atlaskit/tabs'
class PiTabPanelProps {}
function PiTabPanel(props: React.PropsWithChildren<PiTabPanelProps>) {
  return <TabPanel>{props.children}</TabPanel>
}

export default React.memo(PiTabPanel)
