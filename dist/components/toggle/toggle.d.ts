/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type DropDownItemProps = {
    label: string;
    value: string;
};
export declare class PiToggleProps extends BaseProps {
    size?: 'large' | 'regular';
    name: string;
    isDisabled?: boolean;
    isChecked?: boolean;
    label?: string;
    helpText?: string;
    direction?: 'column' | 'row';
    onChange?: (e: any) => void;
    value?: string;
}
/**
 *
 * @param props this component takes PiToggleProps as input
 * @returns  returns component based on library type
 */
export default function PiToggle(props: PiToggleProps): import("react").JSX.Element;
