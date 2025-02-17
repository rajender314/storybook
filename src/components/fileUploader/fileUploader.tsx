import { FileError } from 'react-dropzone'
import { BaseProps } from '../../piConstant'
import { generatefileUploaderComponentTemplate } from './fileUploaderComponent.generator'

export type DropzoneProps = {
  accept?: string | string[]
  maxSize?: number
  minSize?: number
  multiple?: boolean

  maxFiles?: number
  preventDropOnDocument?: boolean
  noClick?: boolean
  noDrag?: boolean
  noDragEventsBubbling?: boolean
  disabled?: boolean
  noKeyboard?: boolean
  onFileDialogCancel?: () => void
  onFileDialogOpen?: () => void
  validator?: <T extends File>(file: T) => FileError | FileError[] | null

  text?: string | React.ReactNode
  validFieErrorMessage?: string
  maxFileSizeErroMessage?: string
}

export class PiFileUploaderProps extends BaseProps {
  dropzoneProps: DropzoneProps
  onUpload?: any
  // accept?: string = 'image/*'
  // maxSize?:number = 5242880 //5MB
  // minSize?:number = 1
  // multiple?:boolean = false
  // text?:string='Click here or drag a file to upload!'
  // validFieErrorMessage?:string = 'Upload valid file type'
  // maxFileSizeErroMessage?:string='Max file uplode size should be 5MB'
  // maxFiles?:number = 100
  // noClick?:boolean
  // noDrag?:boolean
  // disabled?:boolean
}

/**
 *
 * @param props this component takes PiFileUploaderProps as input
 * @returns  returns component based on library type
 */
export default function PiFileUploader(props: PiFileUploaderProps) {
  const newprops = new PiFileUploaderProps()
  return generatefileUploaderComponentTemplate({ ...newprops, ...props })
}
