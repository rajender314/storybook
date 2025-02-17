import { BaseProps } from '../../piConstant';
import React from 'react';
export declare class PiDrawerProps extends BaseProps {
    onClose?: (e: any) => void;
    onCloseComplete?: (e: any) => void;
    onOpenComplete?: (e: any) => void;
    isOpen: boolean;
    width?: 'wide' | 'narrow' | 'medium' | 'full' | 'extended';
}
/**
 *
 * @param props this component takes PiDrawerProps as input
 * @returns  returns component based on library type
 */
export default function PiDrawer({ children, ...props }: React.PropsWithChildren<PiDrawerProps>): React.JSX.Element;
