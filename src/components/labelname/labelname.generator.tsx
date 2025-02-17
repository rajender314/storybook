import React, { useContext, useState } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiLabelNameProps } from './labelname'
import PiThemeContext from '../../themeContext'
import { PiLabelNameClass } from './labelname.css'
import { PiEditIcon } from '../icon/edit.icon'
import { PiCopyIcon } from '../icon/copy-clipboard'
import PiTooltip from '../tooltip'
import useCopy from 'use-copy';

/**
 *
 * @param props as  PiLabelNameProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateLabelNameTemplate({
  libraryType,
  ...props
}: PiLabelNameProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiLabelNameProps
 * @returns LabelName template
 */
function AtlasKitTemplate({ ...props }: PiLabelNameProps) {
  const theme = useContext(PiThemeContext)
  const [copyTooltip, setCopyTooltip] = useState('Copy to Clipboard')
  let [text, setText] = useState('11');
  const [copied, copy, setCopied] = useCopy(text);
  const onClickCopy =  async (newtext: string) => {
    text = newtext
    await setText(newtext)
    setCopyTooltip('Copied')
    await copy();
    console.log(newtext, copied)
    setTimeout(() => {
      setCopied(false);
      setCopyTooltip('Copy to Clipboard')
    }, 3000);
    if(props.onCopyClick) {
      props.onCopyClick('copy')
    }
  }
  return (
    <div className={`${PiLabelNameClass(theme)} pi-label`}>
      <div className='label-text-div'>
        {/* <label className='label-text' title={props.label}>
          {props.label}
        </label> */}
        <div className='field-label-div' style={{ display: 'flex' }}>
          <label className='label-text' title={props.label}>
            {props.label}
          </label>
          {props.isMandatory && (
            <span
              className='mandatory-star'
              style={{ color: 'red', paddingLeft: '4px' }}
            >
              *
            </span>
          )}
        </div>
        {props.isEditIcon && (
          <span className='pi-label-edit-icon' title='Edit'>
            <PiEditIcon
              onClick={(e: any) => {
                props.emitSave ? props.emitSave(e, props.label) : null
              }}
            />
          </span>
        )}
      </div>
      <div className='description-container'>
        <p className='description' title={props.description}>
          {props.description}
        </p>
        {props.isCopyIcon && (
        <div onClick={async () =>  await onClickCopy(props.description)} className='copy-icon'>
          <PiTooltip
            content={copyTooltip}
            libraryType="atalskit"
          >
            <PiCopyIcon />
          </PiTooltip>
        </div>
        )}
      </div>
    </div>
  )
}

/**
 *
 * @param props as  PiLabelNameProps
 * @returns Default LabelName template
 */
function defaultTemplate() {
  return <div />
}
