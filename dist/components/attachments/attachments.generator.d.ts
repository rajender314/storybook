import React from 'react';
import { PiAttachmentsProps } from './attachments';
/**
 *
 * @param props as  PiAttachmentsProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateAttachmentsTemplate({ libraryType, ...props }: PiAttachmentsProps): React.JSX.Element;
