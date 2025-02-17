/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type DropdownElements = {
    id?: string;
    element: React.ReactNode;
};
export declare class PiIconDropdownMenuProps extends BaseProps {
    className?: string;
    appearance?: 'default' | 'tall';
    items: DropdownElements[];
    onOpenChange: (e: DropdownElements) => void;
}
/**
 *
 * @param props this component takes PiIconDropdownMenuProps as input
 * @returns  returns component based on library type
 */
export default function PiIconDropdownMenu(props: PiIconDropdownMenuProps): import("react").JSX.Element;
