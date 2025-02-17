/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiCheckboxProps extends BaseProps {
    label?: string;
    name: string;
    helpText?: string;
    isDisabled?: boolean;
    isChecked?: boolean;
    onChange?: (e: React.ChangeEvent) => void;
    value?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}
/**
 *
 * @param props this component takes PiCheckboxProps as input
 * @returns  returns input component based on library type
 */
export default function PiCheckbox(props: PiCheckboxProps): import("react").JSX.Element;
