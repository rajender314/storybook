/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiInputProps extends BaseProps {
    label?: string;
    name: string;
    onKeyDown?: (e: KeyboardEvent) => void;
    onKeyPress?: (e: KeyboardEvent) => void;
    onChange?: (e: any) => void;
    onBlur?: (e: any) => void;
    helpText?: string;
    appearance?: 'standard' | 'none' | 'subtle';
    isCompact?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    width?: string | number;
    placeholder?: string;
    type?: string;
    className?: string;
    value?: string;
    maxLength?: number;
    autofocus?: boolean;
    ref?: any;
    elemBeforeInput?: any;
    isIcons?: boolean;
    emitSave?: any;
    emitUndo?: any;
    isMandatory?: boolean;
    onClick?: any;
    convertToCapital?: boolean;
    allowedDecimalsPoints?: number;
}
/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns input component based on library type
 */
export default function PiInput(props: PiInputProps): import("react").JSX.Element;
