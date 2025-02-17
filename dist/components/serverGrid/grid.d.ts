/// <reference types="react" />
import { ColDef } from 'ag-grid-community';
import { BaseProps } from '../../piConstant';
export declare class PiGridProps extends BaseProps {
    mode: 'static' | 'paginate' | 'infinite';
    columns: ColDef[];
    [x: string]: any;
}
/**
 *
 * @param props this component takes PiServerGridProps as input
 * @returns  returns grid component based on library type
 */
export default function PiServerGrid(props: PiGridProps): import("react").JSX.Element;
