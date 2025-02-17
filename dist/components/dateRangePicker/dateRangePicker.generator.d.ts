import React from 'react';
import { PiDateRangePickerProps } from './dateRangePicker';
import 'react-datepicker/dist/react-datepicker.css';
/**
 *
 * @param props as  PiDropdownMenuProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export declare function generateDateRangeTemplate({ libraryType, ...props }: PiDateRangePickerProps): React.JSX.Element;
