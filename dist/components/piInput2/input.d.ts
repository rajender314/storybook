/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiInputProps2 extends BaseProps {
    label?: string;
    name: string;
    onKeyDown?: (e: KeyboardEvent) => void;
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
    defaultValue?: string;
}
/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns input component based on library type
 */
export default function PiInput2(props: PiInputProps2): JSX.Element;
