/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type AttachmentsProps = {
    id: number;
    name: string;
    thumbnail: string;
    downloadUrl: string;
    type: string;
    largeimage?: string;
    size: number | string;
    url?: string;
    isDeleteImg?: boolean;
};
export declare class PiAttachmentListProps extends BaseProps {
    attachmentItems: AttachmentsProps[];
    onClickDownload: (e: any) => void;
    onClickPreview: (e: any) => void;
    onClickDelete: (e: any) => void;
}
/**
 *
 * @param props this component takes PiAttachmentListProps as input
 * @returns  returns component based on library type
 */
export default function PiAttachmentList(props: PiAttachmentListProps): import("react").JSX.Element;
