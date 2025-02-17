import React from 'react';
import { PiFlagProps } from './flag';
/**
 *
 * @param props as  PiFlagProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateFlagTemplate({ libraryType, ...props }: React.PropsWithChildren<PiFlagProps>): React.JSX.Element;
