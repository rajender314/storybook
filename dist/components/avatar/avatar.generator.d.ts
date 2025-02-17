import React from 'react';
import { PiAvatarProps } from './avatar';
/**
 *
 * @param props as  PiAvatarProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateAvatarTemplate({ libraryType, ...props }: PiAvatarProps): React.JSX.Element;
