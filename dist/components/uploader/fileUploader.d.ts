/// <reference types="react" />
import { FileError } from 'react-dropzone';
import { BaseProps } from '../../piConstant';
export declare type DropzoneProps = {
    accept?: string | string[];
    maxSize?: number;
    minSize?: number;
    multiple?: boolean;
    maxFiles?: number;
    preventDropOnDocument?: boolean;
    noClick?: boolean;
    noDrag?: boolean;
    noDragEventsBubbling?: boolean;
    disabled?: boolean;
    noKeyboard?: boolean;
    onFileDialogCancel?: () => void;
    onFileDialogOpen?: () => void;
    validator?: <T extends File>(file: T) => FileError | FileError[] | null;
    text?: string | React.ReactNode;
    validFieErrorMessage?: string;
    maxFileSizeErroMessage?: string;
    className?: string;
};
export declare class PiFileUploaderProps extends BaseProps {
    dropzoneProps: DropzoneProps;
    onUpload?: any;
    className?: string;
}
/**
 *
 * @param props this component takes PiFileUploaderProps as input
 * @returns  returns component based on library type
 */
export default function PiUploader(props: PiFileUploaderProps): import("react").JSX.Element;
