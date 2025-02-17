/// <reference types="react" />
import { BaseProps } from '../../piConstant';
declare type TagAppearanceType = 'default' | 'rounded';
export declare type TagColorType = 'info' | 'success' | 'warning' | 'danger';
export declare class PiTagProps extends BaseProps {
    appearance?: TagAppearanceType;
    color: TagColorType;
    text: string;
    href?: string;
    isRemovable?: boolean;
}
/**
 *
 * @param props this component takes PiTagProps as input
 * @returns  returns component based on library type
 */
export default function PiTag(props: PiTagProps): import("react").JSX.Element;
export {};
