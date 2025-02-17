import React from 'react';
import { BaseProps } from '../../piConstant';
export declare type ApperanceType = 'primary' | 'secondary' | 'link';
export declare type PiSizeType = 'xs' | 'small' | 'medium' | 'large';
export declare class PiButtonProps extends BaseProps {
    appearance: ApperanceType;
    label: string;
    isDisabled?: boolean;
    shouldFitContainer?: boolean;
    isLoading?: boolean;
    size?: PiSizeType;
    type?: 'submit' | 'button' | 'reset';
    onClick?: () => void;
    iconBefore?: React.ReactChild;
    iconAfter?: React.ReactChild;
    className?: string;
}
/**
 *
 * @param props this component takes PiInputProps as input
 * @returns  returns component based on library type
 */
export default function PiButton(props: PiButtonProps): React.JSX.Element;
