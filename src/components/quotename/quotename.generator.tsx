import React,{useContext} from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiQuoteNameProps } from './quotename'
import PiThemeContext from '../../themeContext'
import { PiQuoteNameClass } from './quotename.css'
import PiAvatar from '../avatar/avatar'

/**
 *
 * @param props as  PiQuoteNameProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateQuoteNameTemplate({
  libraryType,
  ...props
}: PiQuoteNameProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiQuoteNameProps
 * @returns QuoteName template
 */
function AtlasKitTemplate({ ...props }: PiQuoteNameProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiQuoteNameClass(theme)}>
      <div className="avatar">
      <PiAvatar
        onClick={() => {}}
        size="large"
        src={props.src}
      />
      </div>
      <div className="quote-block">
        <h2 className='label-text'>{props.label}</h2>
        <p className="description">{props.description}</p>
      </div>
    </div>
  )
}

/**
 *
 * @param props as  PiQuoteNameProps
 * @returns Default QuoteName template
 */
function defaultTemplate() {
  return <div></div>
}
