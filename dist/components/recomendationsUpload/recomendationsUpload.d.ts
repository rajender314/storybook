/// <reference types="react" />
import { BaseProps } from '../../piConstant';
import { DropzoneProps } from '../fileUploader/fileUploader';
export declare class PiRecomendationsUploadProps extends BaseProps {
    buttonTitle: string;
    dragText?: string;
    onUploadClick: any;
    dropzoneProps: DropzoneProps;
    isUploading: boolean;
    isUploadFail: boolean;
    isUploadSuccess: boolean;
    uploadMessage: string;
    errorFileLink?: string;
    uploadProgress: number;
    refresheUpload?: boolean;
}
/**
 *
 * @param props this component takes PiRecomendationsUploadProps as input
 * @returns  returns component based on library type
 */
export default function PiRecomendationsUpload(props: PiRecomendationsUploadProps): JSX.Element;
