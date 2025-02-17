import { BaseProps } from '../../piConstant'
import { generateAttachmentListTemplate } from './attachmentList.generator'
export type AttachmentsProps = {
  id: number
  name: string
  thumbnail: string
  downloadUrl: string
  type: string
  largeimage?: string
  size: number | string
  url?: string
  isDeleteImg?: boolean
}

export class PiAttachmentListProps extends BaseProps {
  attachmentItems: AttachmentsProps[]
  onClickDownload: (e: any) => void
  onClickPreview: (e: any) => void
  onClickDelete: (e: any) => void
}

/**
 *
 * @param props this component takes PiAttachmentListProps as input
 * @returns  returns component based on library type
 */
export default function PiAttachmentList(props: PiAttachmentListProps) {
  const newprops = new PiAttachmentListProps()
  return generateAttachmentListTemplate({ ...newprops, ...props })
}
