import React from 'react';
import { PiPermissionsProps } from './permissions';
/**
 *
 * @param props as  PiPermissionsProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generatePermissionsTemplate({ libraryType, ...props }: PiPermissionsProps): React.JSX.Element;
