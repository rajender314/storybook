import React from 'react'
import { PiGridProps } from './grid'
import { AgGridRoot } from './aggrid.root'
import { withGridStatic } from './aggrid.static'
import { withGridInfinite } from './aggrid.infinite'
import { withGridPagination } from './aggrid.pagination'

export default function AgGridTemplate(props: PiGridProps) {
  const defaultColDef = {
    sortable: true,
    rowDrag: false,
    resizable: true,
    enableRowGroup: true,
    enableValue: true,
    enablePivot: true,
    flex: 1,
    ...props?.defaultColDef
  }
  const GRIDCOMPONENT = getGridComponent(props)
  function getGridComponent(props: PiGridProps) {
    switch (props.mode) {
      case 'infinite': {
        console.log('infinite')
        return withGridInfinite(AgGridRoot)
      }
      case 'paginate': {
        return withGridPagination(AgGridRoot)
      }
      default: {
        return withGridStatic(AgGridRoot)
      }
    }
  }
  return (
    <GRIDCOMPONENT {...props} defaultColDef={defaultColDef}></GRIDCOMPONENT>
  )
}
