import React, { useContext } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { DropzoneProps, PiFileUploaderProps } from './fileUploader'
import PiThemeContext from '../../themeContext'
import { PiFileUploader } from './fileUploader.css'
import Dropzone from 'react-dropzone'
// import { PiUploadIcon } from '../icon/upload-icon'

/**
 *
 * @param props as  PiFileUploaderProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generatefileUploaderComponentTemplate({
  libraryType,
  ...props
}: PiFileUploaderProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate()
  }
}

/**
 *
 * @param props as  PiFileUploaderProps
 * @returns Atlaskit ID template
 */
function AtlasKitTemplate({ dropzoneProps, ...props }: PiFileUploaderProps) {
  const theme = useContext(PiThemeContext)
  return (
    <div className={PiFileUploader(theme)}>
      <Dropzone
        onDrop={(acceptedFiles: any) => {
          props.onUpload(acceptedFiles)
        }}
        {...dropzoneProps}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragReject,
          fileRejections,
          acceptedFiles
        }) => {
          const disabled = dropzoneProps.disabled
            ? 'container disabled'
            : 'container'

          return (
            <div className={disabled}>
              <div
                {...getRootProps()}
                className={isDragActive ? 'drag-container' : 'upload-container'}
              >
                <input {...getInputProps()} />
                {/* <PiUploadIcon /> */}
                {isDragActive ? <UploaderText /> : dropzoneProps.text}

                {isDragReject && 'File type not accepted, sorry!'}
              </div>
              <ul className='files-list'>
                {acceptedFiles.length > 0 &&
                  acceptedFiles.map((acceptedFile, index) => (
                    <li key={index}>{acceptedFile.name}</li>
                  ))}
              </ul>

              {fileRejections.length > 0 &&
                fileRejections.map(({ file, errors }) => (
                  <ul key={file.name} className='files-list'>
                    {errors.map((e) => (
                      <li key={e.code} className='error'>
                        {getErrorMessage(e.code, dropzoneProps)}
                      </li>
                    ))}
                  </ul>
                ))}
            </div>
          )
        }}
      </Dropzone>
    </div>
  )
}

function getErrorMessage(code: string, props: DropzoneProps) {
  let message = ''
  if (code == 'file-invalid-type') {
    message = props.validFieErrorMessage
      ? props.validFieErrorMessage
      : 'Upload valide file type'
  } else if (code == 'file-too-large') {
    message = props.maxFileSizeErroMessage
      ? props.maxFileSizeErroMessage
      : 'Max file size exceeded'
  } else if (code == "file-too-small'") {
    message = 'Upload minimum size file'
  } else if (code == 'too-many-files') {
    message = 'Too many files selected'
  }
  return message
}

/**
 *
 * @param props as  PiProfileSectionProps
 * @returns Default Profile Section  template
 */
function DefaultTemplate() {
  return <div />
}

const UploaderText = () => {
  return (
    <div className='drop-container'>
      <div>Drop Here</div>
    </div>
  )
}
