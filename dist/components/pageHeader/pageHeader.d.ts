import React from 'react';
import { BaseProps } from '../../piConstant';
export declare class PiPageHeaderProps extends BaseProps {
    actions?: React.ReactElement;
    bottomBar?: React.ReactElement;
    breadcrumbs?: React.ReactElement;
    children?: React.ReactNode;
}
/**
 *
 * @param props this component takes PiPageHeaderProps as input
 * @returns  returns component based on library type
 */
export default function PiPageHeader(props: PiPageHeaderProps): React.JSX.Element;
