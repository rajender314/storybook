import React from 'react';
import { PiSectionMessageProps } from './sectionMessage';
/**
 *
 * @param props as  PiSectionMessageProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateSectionMessageTemplate({ libraryType, ...props }: PiSectionMessageProps): React.JSX.Element;
