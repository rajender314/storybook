import React from 'react'
import { AgGridReact, AgGridColumn } from 'ag-grid-react'
import 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { PiGridProps } from './grid'

export function AgGridRoot({
  columns,
  defaultColDef,
  exportHandler,
  ...props
}: PiGridProps) {
  const sidebarPanel = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        minWidth: 225,
        width: 225,
        maxWidth: 225
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
        minWidth: 180,
        maxWidth: 400,
        width: 250
      }
    ],
    defaultToolPanel: ''
  }

  function getContextMenuItems(params: any) {
    var result = [
      'copy',
      'copyWithHeaders',
      'paste',
      {
        name: 'Excel Export (.xlsx)',
        icon: '<i />',
        action: () => {
          if (exportHandler.action) {
            exportHandler.action(params)
          } else {
            let body = {
              method: exportHandler.method
            }
            if (exportHandler.method !== 'GET') {
              body['body'] = JSON.stringify({
                ...exportHandler.body
              })
            }
            fetch(exportHandler.url, body)
              .then((resp) => resp)
              .catch((err) => err)
          }
        }
      }
    ]

    return result
  }
  return (
    <div
      id='myGrid'
      style={{
        height: '100vh',
        width: '100%'
      }}
      className='ag-theme-alpine'
    >
      <AgGridReact
        reactUi={true}
        sideBar={sidebarPanel}
        defaultColDef={defaultColDef}
        getContextMenuItems={exportHandler ? getContextMenuItems : undefined}
        {...props}
      >
        {columns.map((column: any) => (
          <AgGridColumn {...column} key={column.field}></AgGridColumn>
        ))}
      </AgGridReact>
    </div>
  )
}

// export default React.Component(AgGridRoot)
