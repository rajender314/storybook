/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiSearchProps extends BaseProps {
    onKeyUp?: (e: KeyboardEvent) => void;
    onValueChange: (e: any) => void;
    value: string;
    appearance?: 'standard' | 'none' | 'subtle';
    isCompact?: boolean;
    isDisabled?: boolean;
    width?: string | number;
    placeholder?: string;
    type?: string;
    onClear?: () => void;
    maxLength?: number;
    className?: string;
}
/**
 *
 * @param props this component takes PiSearchProps as input
 * @returns  returns search component based on library type
 */
export default function PiSearch(props: PiSearchProps): import("react").JSX.Element;
