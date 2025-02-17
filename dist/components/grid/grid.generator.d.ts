import React from 'react';
import { PiGridProps } from './grid';
/**
 *
 * @param props as  PiGridProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateGridTemplate({ libraryType, ...props }: PiGridProps): React.JSX.Element;
