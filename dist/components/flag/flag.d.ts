import React from 'react';
import { BaseProps } from '../../piConstant';
export declare type PiAppearanceType = 'error' | 'info' | 'normal' | 'success' | 'warning';
export declare class PiFlagProps extends BaseProps {
    title: React.ReactNode | string;
    id: number | string;
    appearance?: PiAppearanceType;
    description?: React.ReactNode | string;
    handleClose?: () => {};
}
/**
 *
 * @param props this component takes PiFlagProps as input
 * @returns  returns component based on library type
 */
export default function PiFlag(props: React.PropsWithChildren<PiFlagProps>): React.JSX.Element;
