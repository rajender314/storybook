/// <reference types="react" />
import { ColDef } from 'ag-grid-community';
import { BaseProps } from '../../piConstant';
export declare class PiGridProps extends BaseProps {
    columns: ColDef[];
    [x: string]: any;
}
/**
 *
 * @param props this component takes PiGridProps as input
 * @returns  returns grid component based on library type
 */
export default function PiGrid(props: PiGridProps): import("react").JSX.Element;
