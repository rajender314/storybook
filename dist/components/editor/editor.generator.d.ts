import React from 'react';
import { PiEditorProps } from './editor';
import 'react-quill/dist/quill.snow.css';
/**
 *
 * @param props as  PiEditorProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateEditorTemplate({ libraryType, ...props }: PiEditorProps): React.JSX.Element;
