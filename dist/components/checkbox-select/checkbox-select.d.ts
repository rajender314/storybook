/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type DropDownItemProps = {
    label: string;
    value: string;
};
export declare class PiSelectProps extends BaseProps {
    label?: string;
    name: string;
    helpText?: string;
    isDisabled?: boolean;
    defaultValue?: DropDownItemProps;
    onChange?: (e: DropDownItemProps, actionMeta?: any) => void;
    value?: any;
    isMulti?: boolean;
    isSearchable?: boolean;
    options: DropDownItemProps[];
    placeholder?: string;
    variant?: 'standard' | 'outlined' | 'filled';
    className?: string;
    menuIsOpen?: boolean;
    classNamePrefix?: string;
    isClearable?: boolean;
    onInputChange?: any;
    onFocus?: any;
    noOptionsMessage?: any;
    isIcons?: boolean;
    emitSave?: any;
    emitUndo?: any;
    isMandatory?: boolean;
    isLoading?: any;
}
/**
 *
 * @param props this component takes PiSelectProps as input
 * @returns  returns component based on library type
 */
export default function PiCheckBoxSelect(props: PiSelectProps): import("react").JSX.Element;
