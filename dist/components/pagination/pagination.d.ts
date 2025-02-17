/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type DropDownItemProps = {
    label: string;
    value: string;
};
export declare class PiPaginationProps extends BaseProps {
    selectedIndex?: number;
    pages: number;
    onChange?: (e: number) => void;
    testId?: string;
}
/**
 *
 * @param props this component takes PiPaginationProps as input
 * @returns  returns component based on library type
 */
export default function PiPagination(props: PiPaginationProps): import("react").JSX.Element;
