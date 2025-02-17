import React, { useContext } from 'react'
import Tabs from '@atlaskit/tabs'
import PiThemeContext from '../../themeContext'
import { PiTabClass } from './tab.css'
export class PiTabGroupProps {
  selected?: number
  id: string = 'default-tab'
  onChange?: (e: number) => void
  className?: string
}
function PiTabGroup(props: React.PropsWithChildren<PiTabGroupProps>) {
  const theme = useContext(PiThemeContext)
  const handleChange = (e: number) => {
    if (props.onChange) {
      props.onChange(e)
    }
  }
  return (
    <div className={`${PiTabClass(theme)} pitabs-wrapper`}>
      <Tabs id={props.id} selected={props.selected} onChange={handleChange}>
        {props.children}
      </Tabs>
    </div>
  )
}

export default React.memo(PiTabGroup)
