import React from 'react';
import { BaseProps } from '../../piConstant';
export declare type PiAppearanceType = 'information' | 'warning' | 'error' | 'success' | 'discovery';
export declare class PiSectionMessageProps extends BaseProps {
    appearance?: 'information' | 'warning' | 'error' | 'success' | 'discovery';
    children?: React.ReactNode;
    title?: string;
}
/**
 *
 * @param props this component takes PiSectionMessageProps as input
 * @returns  returns component based on library type
 */
export default function PiSectionMessage(props: PiSectionMessageProps): React.JSX.Element;
