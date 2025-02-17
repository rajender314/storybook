/// <reference types="react" />
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { PiGridProps } from './grid';
export declare function AgGridRoot({ columns, defaultColDef, exportHandler, ...props }: PiGridProps): JSX.Element;
