import React from 'react';
import { PiInputProps } from './input';
/**
 *
 * @param props as  PiInputProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateInputTemplate({ libraryType, ...props }: PiInputProps): React.JSX.Element;
