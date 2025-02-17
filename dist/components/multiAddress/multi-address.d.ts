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
export declare type AddressTypeProps = {
    billing: AddressElements;
    shipping: AddressElements;
};
export declare class PiAddressProps extends BaseProps {
    billingLabel: string;
    shippingLabel: string;
    data: AddressTypeProps;
}
/**
 *
 * @param props this component takes PiAddressProps as input
 * @returns  returns component based on library type
 */
export default function PiMultiAddress(props: PiAddressProps): import("react").JSX.Element;
