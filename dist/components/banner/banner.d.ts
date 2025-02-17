import React from 'react';
import { BaseProps } from '../../piConstant';
export declare type PiAppearanceType = 'warning' | 'error' | 'announcement';
export declare class PiBannerProps extends BaseProps {
    appearance?: 'warning' | 'error' | 'announcement';
    icon?: React.ReactChild;
    isOpen?: boolean;
    children: React.ReactNode;
}
/**
 *
 * @param props this component takes PiBannerProps as input
 * @returns  returns component based on library type
 */
export default function PiBanner(props: PiBannerProps): React.JSX.Element;
