import React, { Fragment } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiAttachmentListProps, AttachmentsProps } from './attachmentList'
import { PiAttachments } from '..'
import { PiAttachmentListClass } from './attachmentList.css'

/**
 *
 * @param props as  PiAttachmentListProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateAttachmentListTemplate({
  libraryType,
  ...props
}: PiAttachmentListProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate()
  }
}

/**
 *
 * @param props as  PiAttachmentListProps
 * @returns Atlaskit Pagination template
 */
function AtlasKitTemplate({ ...props }: PiAttachmentListProps) {
  function deleteImage(file: any) {
    props.onClickDelete(file)
  }
  function downloadImage(file: any) {
    props.onClickDownload(file)
  }
  function previewImage(file: any) {
    props.onClickPreview(file)
  }
  return (
    <div className={PiAttachmentListClass()}>
      {props.attachmentItems.map(
        (attachment: AttachmentsProps, index: number) => {
          return (
            <div key={index} className='main'>
              <PiAttachments
                attachmentItem={attachment}
                onClickDelete={() => deleteImage(attachment)}
                onClickDownload={() => downloadImage(attachment)}
                onClickPreview={() => previewImage(attachment)}
              />
            </div>
          )
        }
      )}
    </div>
  )
}

/**
 *
 * @param props as  PiAttachmentListProps
 * @returns Default Pagination template
 */
function DefaultTemplate() {
  return <Fragment />
}
