/// <reference types="react" />
import { PiHeaderMenuProps } from './customerheaderMenu';
/**
 *
 * @param props as  PiHeaderMenuProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateHeaderMenuTemplate({ libraryType, ...props }: PiHeaderMenuProps): JSX.Element;
