import React from 'react';
import { PiTimePickerProps } from './timePicker';
/**
 *
 * @param props as  PiTimePickerProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateTimePickerTemplate({ libraryType, ...props }: PiTimePickerProps): React.JSX.Element;
