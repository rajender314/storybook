import React from 'react';
import { PiToastProps } from './toast';
/**
 *
 * @param props as  PiToastClass
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateAddressTemplate({ libraryType, ...props }: PiToastProps): React.JSX.Element;
