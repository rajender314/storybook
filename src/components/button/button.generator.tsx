import React, { useContext } from 'react'
import { default as AtlasButton, LoadingButton } from '@atlaskit/button'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiButtonProps } from './button'
import PiThemeContext from '../../themeContext'
import {
  PiButtonLinkClass,
  PiButtonPrimaryClass,
  PiButtonSecondaryClass
} from './button.css'
import { cx } from '@emotion/css'
/**
 *
 * @param props as  PiButtonProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateButtonTemplate({
  libraryType,
  ...props
}: PiButtonProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiButtonProps
 * @returns Atlaskit Button template
 */
function AtlasKitTemplate({
  label,
  isLoading,
  appearance,
  size,
  className,
  ...props
}: PiButtonProps) {
  const theme = useContext(PiThemeContext)
  const piClass = {
    link: PiButtonLinkClass,
    primary: PiButtonPrimaryClass,
    secondary: PiButtonSecondaryClass
  }
  const clsName = piClass[appearance]
  return props && isLoading ? (
    <LoadingButton
      {...props}
      isLoading
      className={cx(className, clsName ? clsName(theme, size) : '')}
    >
      {label}
    </LoadingButton>
  ) : (
    <AtlasButton
      {...props}
      className={cx(className, clsName ? clsName(theme, size) : '')}
    >
      {label}
    </AtlasButton>
  )
}

/**
 *
 * @param props as  PiButtonProps
 * @returns Default Button template
 */
function DefaultTemplate({ label, ...props }: PiButtonProps) {
  const defaultProps = generateDefaultProps({ label, ...props })

  return <button {...defaultProps}>{label}</button>
}

/**
 *
 * @param props as  PiButtonProps
 * @returns props suitable for default template after conversion
 */
function generateDefaultProps(props: PiButtonProps) {
  const defaultProps = {
    onClick: props.onClick,
    disabled: props.isDisabled,
    type: props.type
  }
  return defaultProps
}
