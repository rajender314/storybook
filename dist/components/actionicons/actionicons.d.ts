/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiActionIconProps extends BaseProps {
    appearance?: 'download' | 'print' | 'sort' | 'filter' | 'more' | 'mail';
    icontext?: string;
    isDisabled?: boolean;
    onClick?: () => void;
    className?: string;
}
/**
 *
 * @param props this component takes PiActionIconProps as input
 * @returns  returns component based on library type
 */
export default function PiActionIcon(props: PiActionIconProps): import("react").JSX.Element;
