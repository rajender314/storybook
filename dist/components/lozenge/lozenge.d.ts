import React from 'react';
import { BaseProps } from '../../piConstant';
export declare class PiLozengeProps extends BaseProps {
    appearance: any;
    isBold?: boolean;
    children: React.ReactNode;
    maxWidth?: number | string;
    className?: string;
}
/**
 *
 * @param props this component takes PiLozengeProps as input
 * @returns  returns component based on library type
 */
export default function PiLozenge(props: PiLozengeProps): React.JSX.Element;
