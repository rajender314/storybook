/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type AttachmentsProps = {
    id: number;
    name: string;
    thumbnail: string;
    downloadUrl: string;
    type: string;
    largeimage?: string;
    size: string | number;
    url?: string;
    isDeleteImg?: boolean;
};
export declare class PiAttachmentsProps extends BaseProps {
    attachmentItem: AttachmentsProps;
    onClickDownload: (e: any) => void;
    onClickPreview: (e: any) => void;
    onClickDelete: (e: any) => void;
}
/**
 *
 * @param props this component takes PiAttachmentsProps as input
 * @returns  returns component based on library type
 */
export default function PiAttachments(props: PiAttachmentsProps): import("react").JSX.Element;
