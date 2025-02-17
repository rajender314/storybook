/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type AddressElements = {
    id?: number;
    address1?: string;
    address2?: string;
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: number;
};
export declare class PiAddressProps extends BaseProps {
    label: string;
    data?: AddressElements;
}
/**
 *
 * @param props this component takes PiSpinnerProps as input
 * @returns  returns component based on library type
 */
export default function PiAddress(props: PiAddressProps): import("react").JSX.Element;
