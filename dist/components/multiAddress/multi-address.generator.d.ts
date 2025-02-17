import React from 'react';
import { PiAddressProps } from './multi-address';
/**
 *
 * @param props as  PiAddressProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateAddressTemplate({ libraryType, ...props }: PiAddressProps): React.JSX.Element;
