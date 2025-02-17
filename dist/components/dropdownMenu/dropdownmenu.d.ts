/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type DropdownElements = {
    id?: number;
    name: any;
    display?: boolean;
    isSelected?: boolean;
};
export declare class PiDropdownMenuProps extends BaseProps {
    label: string;
    appearance?: 'default' | 'tall';
    items: DropdownElements[];
    onOpenChange: (e: any) => void;
    className?: string;
    autoFocus?: any;
}
/**
 *
 * @param props this component takes PiDropdownMenuProps as input
 * @returns  returns component based on library type
 */
export default function PiDropdownMenu(props: PiDropdownMenuProps): import("react").JSX.Element;
