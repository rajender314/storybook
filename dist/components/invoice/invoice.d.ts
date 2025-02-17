/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type InvoiceProps = {
    packingCharges: string;
    SGST: string;
    CGST: string;
    IGST: string;
    Total: string;
};
export declare class PiInvoiceProps extends BaseProps {
    invoiceOptions: InvoiceProps;
}
/**
 *
 * @param props this component takes PiInvoiceProps as input
 * @returns  returns component based on library type
 */
export default function PiBackSection(props: PiInvoiceProps): import("react").JSX.Element;
