/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type DropdownElements = {
    id?: number;
    name: any;
};
export declare class PiDateRangePickerProps extends BaseProps {
    selectsRange: boolean;
    startDate: any;
    endDate: any;
    placeholderText: string;
    className?: string;
    minDate: any;
    isClearable?: boolean;
    onChange: (e: any) => void;
}
/**
 *
 * @param props this component takes PiDropdownMenuProps as input
 * @returns  returns component based on library type
 */
export default function PiDateRangePicker(props: PiDateRangePickerProps): import("react").JSX.Element;
