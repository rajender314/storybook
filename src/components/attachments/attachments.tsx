import { BaseProps } from '../../piConstant'
import { generateAttachmentsTemplate } from './attachments.generator'
export type AttachmentsProps = {
  id: number
  name: string
  thumbnail: string
  downloadUrl: string
  type: string
  largeimage?: string
  size: string | number
  url?: string
  isDeleteImg?: boolean
}

export class PiAttachmentsProps extends BaseProps {
  attachmentItem: AttachmentsProps
  onClickDownload: (e: any) => void
  onClickPreview: (e: any) => void
  onClickDelete: (e: any) => void
}

/**
 *
 * @param props this component takes PiAttachmentsProps as input
 * @returns  returns component based on library type
 */
export default function PiAttachments(props: PiAttachmentsProps) {
  const newprops = new PiAttachmentsProps()
  return generateAttachmentsTemplate({ ...newprops, ...props })
}
