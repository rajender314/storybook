import React from 'react';
import { PiInvoiceProps } from './invoice';
/**
 *
 * @param props as  PiInvoiceProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateInvoiceTemplate({ libraryType, ...props }: PiInvoiceProps): React.JSX.Element;
