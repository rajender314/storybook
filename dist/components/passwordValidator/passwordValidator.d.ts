/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiPasswordValidatorProps extends BaseProps {
    password: string;
    maxSize: number;
    minSize: number;
}
/**
 *
 * @param props this component takes PiFileUploaderProps as input
 * @returns  returns component based on library type
 */
export default function PiPasswordValidator(props: PiPasswordValidatorProps): import("react").JSX.Element;
