/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiQuoteNameProps extends BaseProps {
    label?: string;
    description?: string;
    src?: string;
}
/**
 *
 * @param props this component takes PiQuoteNameProps as input
 * @returns  returns component based on library type
 */
export default function PiQuoteName(props: PiQuoteNameProps): import("react").JSX.Element;
