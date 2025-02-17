/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiToastProps extends BaseProps {
    headerLabel: string;
    message: any;
    onClose: () => void;
    className?: string;
}
/**
 *
 * @param props this component takes PiSpinnerProps as input
 * @returns  returns component based on library type
 */
export default function PiToast(props: PiToastProps): import("react").JSX.Element;
