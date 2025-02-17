import React from 'react';
import { PiBannerProps } from './banner';
/**
 *
 * @param props as  PiBannerProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateBannerTemplate({ libraryType, ...props }: PiBannerProps): React.JSX.Element;
