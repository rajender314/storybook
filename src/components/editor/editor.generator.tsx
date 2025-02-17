import React from 'react'
import ReactQuill from 'react-quill'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiEditorProps } from './editor'
import 'react-quill/dist/quill.snow.css'
/**
 *
 * @param props as  PiEditorProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateEditorTemplate({
  libraryType,
  ...props
}: PiEditorProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiEditorProps
 * @returns Editor template
 */
function AtlasKitTemplate({ ...props }: PiEditorProps) {
  return (
    <ReactQuill
      value={props.value}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      readOnly={props.readOnly}
    />
  )
}

/**
 *
 * @param props as  PiEditorProps
 * @returns Default Editor template
 */
function defaultTemplate() {
  return <div>NO template</div>
}
