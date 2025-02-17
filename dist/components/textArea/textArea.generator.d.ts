import React from 'react';
import { PiTextAreaProps } from './textArea';
/**
 *
 * @param props as  PiTextAreaProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateTextAreaTemplate({ libraryType, ...props }: PiTextAreaProps): React.JSX.Element;
