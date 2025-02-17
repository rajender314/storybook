import React from 'react';
import { PiButtonProps } from './button';
/**
 *
 * @param props as  PiButtonProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateButtonTemplate({ libraryType, ...props }: PiButtonProps): React.JSX.Element;
