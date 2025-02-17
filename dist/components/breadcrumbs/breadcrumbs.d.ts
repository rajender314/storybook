/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type BreadCrumbItemProps = {
    label: string;
    href: string;
};
export declare class PiBreadCrumbProps extends BaseProps {
    items: BreadCrumbItemProps[];
    href?: string;
    text?: string;
    target?: '_blank' | '_self' | '_top' | '_parent';
    maxItems?: number;
    onClick?: () => void;
}
/**
 *
 * @param props this component takes PiBreadCrumbProps as input
 * @returns  returns component based on library type
 */
export default function PiBreadCrumb(props: PiBreadCrumbProps): import("react").JSX.Element;
