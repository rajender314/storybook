/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiIconInputProps extends BaseProps {
    label?: string;
    name: string;
    onChange?: (e: any) => void;
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
    onKeyPress?: any;
    isMandatory?: boolean;
}
/**
 *
 * @param props this component takes PiIconInputProps as input
 * @returns  returns input component based on library type
 */
export default function PiIconInput(props: PiIconInputProps): import("react").JSX.Element;
