/// <reference types="react" />
import { BaseProps } from '../../piConstant';
declare type MenuOptions = {
    key: string;
    label: string;
    display?: boolean;
};
export declare type PiMenuOptions = {
    children?: MenuOptions[];
    key: string;
    label: string;
    icon?: any;
    href?: string;
    email?: string;
    display?: boolean;
    code?: string;
};
export declare class PiLeftMenuProps extends BaseProps {
    options: PiMenuOptions[];
    activeKey: string;
    onMenuClick: (e: MenuOptions) => void;
}
/**
 *
 * @param props this component takes PiLeftMenuProps as input
 * @returns  returns component based on library type
 */
export default function PiLeftMenu(props: PiLeftMenuProps): import("react").JSX.Element;
export {};
