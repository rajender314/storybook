/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiLabelNameProps extends BaseProps {
    label?: string;
    description?: any;
    className?: string;
    isEditIcon?: boolean;
    emitSave?: any;
    isMandatory?: boolean;
    isCopyIcon?: boolean;
    onCopyClick?: (e: any) => void;
}
/**
 *
 * @param props this component takes PiLabelNameProps as input
 * @returns  returns component based on library type
 */
export default function PiLabelName(props: PiLabelNameProps): import("react").JSX.Element;
