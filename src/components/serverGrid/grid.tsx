import { ColDef } from 'ag-grid-community'
import { BaseProps } from '../../piConstant'
import { generateGridTemplate } from './grid.generator'

export class PiGridProps extends BaseProps {
  mode: 'static' | 'paginate' | 'infinite' = 'static'
  columns: ColDef[] = [];
  [x: string]: any
}

/**
 *
 * @param props this component takes PiServerGridProps as input
 * @returns  returns grid component based on library type
 */
export default function PiServerGrid(props: PiGridProps) {
  const newprops = new PiGridProps()

  return generateGridTemplate({ ...newprops, ...props })
}
