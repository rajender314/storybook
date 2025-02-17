/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiDateTimePickerProps extends BaseProps {
    label?: string;
    name: string;
    onKeyDown?: (e: KeyboardEvent) => void;
    helpText?: string;
    appearance?: 'standard' | 'none' | 'subtle';
    isDisabled?: boolean;
    placeholder?: string;
    dateFormat?: string;
    timeFormat?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent) => void;
    minDate?: string;
    maxDate?: string;
    isOpen?: boolean;
    timeIsEditable?: boolean;
    times?: any;
    parseValue?: any;
    isIcons?: boolean;
    emitSave?: any;
    emitUndo?: any;
    isMandatory?: boolean;
    datePickerProps?: any;
    timePickerProps?: any;
    id?: string;
    testId?: string;
}
/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns input component based on library type
 */
export default function PiDateTimePicker(props: PiDateTimePickerProps): import("react").JSX.Element;
