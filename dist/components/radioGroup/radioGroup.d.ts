import { ReactNode } from 'react';
import { BaseProps } from '../../piConstant';
export declare type RadioOptionsType = {
    isDisabled?: boolean;
    label?: ReactNode;
    name?: string;
    value?: any;
    testId?: string;
};
export declare class PiRadioGroupProps extends BaseProps {
    label?: string;
    name: string;
    helpText?: string;
    isDisabled?: boolean;
    onChange?: any;
    isChecked?: any;
    value?: any;
    options: Array<RadioOptionsType>;
    className?: string;
    id?: string;
}
/**
 *
 * @param props this component takes PiRadioGroupProps as input
 * @returns  returns input component based on library type
 */
export default function PiRadioGroup(props: PiRadioGroupProps): any;
