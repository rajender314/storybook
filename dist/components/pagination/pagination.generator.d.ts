import React from 'react';
import { PiPaginationProps } from './pagination';
/**
 *
 * @param props as  PiPaginationProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generatePaginationTemplate({ libraryType, ...props }: PiPaginationProps): React.JSX.Element;
