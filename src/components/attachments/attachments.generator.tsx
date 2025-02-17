import React, { Fragment, useContext, useState } from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiAttachmentsProps } from './attachments'
import { PiAttachmentClass } from './attachments.css'
import PiThemeContext from '../../themeContext'
import { PiCssAtachmentIcon } from '../icon/attachmentCssType.icon'
import { PiXlsxAtachmentIcon } from '../icon/attachmentXlsxType.icon'
import { PiTypography, PiModal, PiTooltip } from '..'
import { PiAttachmentDownloadIcon } from '../icon/downloadWhite.icon'
import { PiZoomIcon } from '../icon/zoomIcon'
import { PiDeleteIcon } from '../icon/delete.icon'
import { PiZipAtachmentIcon } from '../icon/attachmentZipType.icon'
import { PiDocAtachmentIcon } from '../icon/attachmetDocType.icon'
import { PiHtmlAtachmentIcon } from '../icon/attachmentHtmlType.icon'
import { PiPptAtachmentIcon } from '../icon/attachmentPptType.icon'
import { PiPdfAtachmentIcon } from '../icon/attachmentPdfType.icon'
import { PiCloseIcon } from '../icon/close.icon'

/**
 *
 * @param props as  PiAttachmentsProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateAttachmentsTemplate({
  libraryType,
  ...props
}: PiAttachmentsProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate()
  }
}

/**
 *
 * @param props as  PiAttachmentsProps
 * @returns Atlaskit Pagination template
 */
function AtlasKitTemplate({ ...props }: PiAttachmentsProps) {
  const theme = useContext(PiThemeContext)
  const [isModalOpen, setIsOModalOpen] = useState<boolean>(false)

  function deleteImage(file: any) {
    props.onClickDelete(file)
  }
  function downloadImage(file: any) {
    props.onClickDownload(file)
  }
  function previewImage(file: any) {
    props.onClickPreview(file)
    setIsOModalOpen(true)
  }
  return (
    <div className={PiAttachmentClass(theme)}>
      <div className='main-container'>
        {props.attachmentItem.thumbnail ? (
          <Fragment>
            <div className='image_Container'>
              <img alt='loading' src={props.attachmentItem.thumbnail} />
            </div>
            <div className='label label-image'>
            <PiTooltip content={props.attachmentItem.name} libraryType="atalskit">
              <PiTypography component='label'>
                {props.attachmentItem.name}
              </PiTypography>
              </PiTooltip>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className='icon-container'>
              {getIcon(props.attachmentItem.type)}
            </div>
            <div className='label'>
            <PiTooltip content={props.attachmentItem.name} libraryType="atalskit">
              <PiTypography component='label'>
                {props.attachmentItem.name}
              </PiTypography>
              </PiTooltip>
            </div>
          </Fragment>
        )}
        <div className='overlay'>
          <div onClick={props.onClickDownload} className='icon_class'>
            {props.attachmentItem.downloadUrl ? (
              <div onClick={() => downloadImage(props.attachmentItem)}>
                <PiAttachmentDownloadIcon />
              </div>
            ) : (
              <PiAttachmentDownloadIcon />
            )}
          </div>
          {(props.attachmentItem.type === 'pdf' ||
            props.attachmentItem.type === 'xlsx' ||
            props.attachmentItem.type === 'docx' ||
            props.attachmentItem.type === 'ppt' ||
            props.attachmentItem.type === 'csv') && (
            <a
              target='_blank'
              href={
                props.attachmentItem.url || props.attachmentItem.downloadUrl
              }
              className='icon_class'
              rel='noreferrer'
            >
              <PiZoomIcon />
            </a>
          )}
          {(props.attachmentItem.type === 'jpg' ||
            props.attachmentItem.type === 'jpeg' ||
            props.attachmentItem.type === 'png' ||
            props.attachmentItem.type === 'svg') && (
            <div
              onClick={() => previewImage(props.attachmentItem)}
              className='icon_class'
            >
              <PiZoomIcon />
            </div>
          )}
          {props.attachmentItem.isDeleteImg && (
            <div onClick={() => deleteImage(props.attachmentItem)}>
              <PiDeleteIcon />
            </div>
          )}
         
        </div>
      </div>
      {/* {props.attachmentItem.largeimage ? ( */}
      <div className='Model-container'>
        <PiModal isOpen={isModalOpen} width='auto'>
          <div
            id='model-div'
            style={{
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
              maxWidth: '600px'
            }}
          >
            <div
              style={{
                position: 'absolute',
                cursor: 'pointer',
                top: 0,
                right: 0
              }}
              onClick={() => setIsOModalOpen(false)}
            >
              {getIcon('close')}
            </div>
            <img
              alt='loading'
              src={props.attachmentItem.thumbnail}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
        </PiModal>
      </div>
      {/* ) : null} */}
    </div>
  )
}

function getIcon(type: string) {
  switch (type) {
    case 'css': {
      return <PiCssAtachmentIcon />
    }
    case 'xlsx': {
      return <PiXlsxAtachmentIcon />
    }
    case 'zip': {
      return <PiZipAtachmentIcon />
    }
    case 'docx': {
      return <PiDocAtachmentIcon />
    }
    case 'html': {
      return <PiHtmlAtachmentIcon />
    }
    case 'ppt': {
      return <PiPptAtachmentIcon />
    }
    case 'pdf': {
      return <PiPdfAtachmentIcon />
    }
    case 'close': {
      return <PiCloseIcon />
    }

    default: {
      return <PiCssAtachmentIcon />
    }
  }
}

/**
 *
 * @param props as  PiAttachmentsProps
 * @returns Default Pagination template
 */
function DefaultTemplate() {
  return <Fragment />
}
