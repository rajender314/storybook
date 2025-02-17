/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiTimePickerProps extends BaseProps {
    label?: string;
    name: string;
    onKeyDown?: (e: KeyboardEvent) => void;
    helpText?: string;
    appearance?: 'standard' | 'none' | 'subtle';
    isDisabled?: boolean;
    placeholder?: string;
    timeFormat?: string;
    value?: string;
    onChange?: (e: string) => void;
    isOpen?: boolean;
}
/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns component based on library type
 */
export default function PiTimePicker(props: PiTimePickerProps): import("react").JSX.Element;
