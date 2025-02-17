import { BaseProps } from '../../piConstant';
export declare class PiDatePickerProps extends BaseProps {
    label?: string;
    name: string;
    onKeyDown?: (e: KeyboardEvent) => void;
    helpText?: string;
    appearance?: 'standard' | 'none' | 'subtle';
    isDisabled?: boolean;
    placeholder?: string;
    dateFormat?: string;
    onChange?: any;
    defaultValue?: string;
    minDate?: string;
    maxDate?: string;
    value?: string;
    isOpen?: boolean;
    isIcons?: boolean;
    emitSave?: any;
    emitUndo?: any;
    isMandatory?: boolean;
    id?: string;
    onKeyPress?: any;
    testId?: any;
}
/**
 *
 * @param props this component takes PiDatePickerProps as input
 * @returns  returns input component based on library type
 */
export default function PiDatePicker(props: PiDatePickerProps): any;
