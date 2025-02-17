import React, { useEffect, useState } from 'react'
// import { ATALASLIT_LIBRARY } from '../../piConstant'
// import AgGridTemplate from './aggrid.template'
import { PiGridProps } from './grid'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import PiSpinner from '../spinner'
import { PaginationChangedEvent } from 'ag-grid-community'
/**
 *
 * @param props as  PiGridProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateGridTemplate({ libraryType, ...props }: PiGridProps) {
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

  let [appUrl, setAppUrl]: any = useState('')
  const [loading, setloading] = useState(true)

  let [gridapi, setGridApi]: any = useState(null)
  // let [props1, setProps]: any = useState(null)

  const onGridReady = (params: any) => {
    console.log(props)
    gridapi = params.api
    setGridApi(gridapi)
    // props1 = props
    // setProps(props1)
    if (props.onGridReady) {
      props.onGridReady(params)
    }
    setTimeout(() => {
      const dataSource = ServerSideDatasource(props)
      params.api.setServerSideDatasource(dataSource)
    }, 1000)
  }

  useEffect(() => {
    // (async () => {
    //   const dataSource = await ServerSideDatasource(props)
    //   if (gridapi) {
    //     gridapi.setServerSideDatasource(dataSource)
    //   }
    // })()
  }, [])

  function pageChanged(e: PaginationChangedEvent) {
    console.log(e)
  }

  function ServerSideDatasource(props: any) {
    return {
      getRows: function (params: any) {
        setloading(true)

        console.log(
          '[Datasource] - rows requested by grid: ',
          params.request,
          props
        )
        // params.api.showLoadingOverlay()

        const sort = params.request.sortModel.length
          ? params.request.sortModel[0].sort
          : ''
        const sortkey = params.request.sortModel.length
          ? params.request.sortModel[0].colId
          : ''

        setTimeout(function () {
          const info: any = localStorage.getItem('requestInfo') as string
          const requestInfo = JSON.parse(info)
          // const requestInfo = Object.assign({}, props.requestInfo)
          const body: any = {
            method: requestInfo.method,
            headers: requestInfo.headers
            // body: ''
          }
          appUrl = requestInfo.url
          setAppUrl(appUrl)
          if (requestInfo.method !== 'GET') {
            body.body = JSON.stringify({
              startRow: params.request.startRow,
              endRow: params.request.endRow,
              ...requestInfo.body
            })
          } else {
            let page: number
            // if (props.pageNumber === undefined || props.pageNumber === null) {
            page = params.request.endRow / 25
            // } else {
            //   page = props.pageNumber
            // }
            // console.log(page)
            requestInfo.url = `${requestInfo.url}?page=${page}&sort=${sort}&sort_key=${sortkey}`
            appUrl = requestInfo.url
            setAppUrl(appUrl)
            if (requestInfo.body.grid_name === 'Admin') {
              getAdminColumnFilterIds(params.request)
            } else {
              getColumnFilterIds(params.request)
              if (requestInfo.body.grid_name === 'Repairs') {
                setCustomerFilterParams()
                getCustomFilterIds()
              }
            }
            setAdditionalParams()
            const searchValue: any = localStorage.getItem('test')

            if (searchValue && searchValue.length) {
              appUrl = `${appUrl}`.concat('&search=' + searchValue)
              setAppUrl(appUrl)
            }
            localStorage.setItem('appUrl', appUrl)
          }
          fetch(appUrl, body)
            .then((resp) => resp.json())
            .then((data) => {
              // params.api.hideOverlay()
              if (data && data.result.success) {
                // var response = data
                var response = data.result.data.list
                localStorage.setItem('gridResponse', JSON.stringify(response))
                if (response && !response.length) {
                  setloading(false)
                  params.api.showNoRowsOverlay()
                } else if (response && response.length) {
                  params.api.hideOverlay()
                  setloading(false)
                } else {
                  params.api.hideOverlay()
                  setloading(false)
                }

                params.success({
                  rowData: response,
                  rowCount: data.result.data.total_count
                })
              } else {
                params.fail()
              }
            })
        }, 200)
      }
    }
  }

  let filterArray: Array<[]> = []
  function getColumnFilterIds(params: any) {
    const info: any = localStorage.getItem('requestInfo') as string
    const requestInfo = JSON.parse(info)

    for (var key in params.filterModel) {
      if (params.filterModel.hasOwnProperty(key)) {
        filterArray = []
        requestInfo.body.serverFilterOptions &&
          requestInfo.body.serverFilterOptions[key].map((obj1: any) => {
            params.filterModel[key].values.map((obj: any, index: number) => {
              console.log(obj.name)
              if (obj1.name === params.filterModel[key].values[index]) {
                filterArray.push(obj1.id)
              }
            })
          })

        if (filterArray.length) {
          key = filterArray
            .map(function (el: any, idx: number) {
              return key + '[' + idx + ']=' + el
            })
            .join('&')
          appUrl = `${appUrl}`.concat('&' + key)
          setAppUrl(appUrl)
          // paramUrl = `&sort=${sort}&sort_key=${sortkey}`.concat('&' + key)
          // setParamUrl(paramUrl)
        }
      }
    }
  }

  function getAdminColumnFilterIds(params: any) {
    const info: any = localStorage.getItem('requestInfo') as string
    const requestInfo = JSON.parse(info)

    for (var key in params.filterModel) {
      if (params.filterModel.hasOwnProperty(key)) {
        filterArray = []
        requestInfo.body.serverFilterOptions &&
          requestInfo.body.serverFilterOptions[key].map((obj1: any) => {
            params.filterModel[key].values.map((obj: any, index: number) => {
              console.log(obj.name)
              if (obj1.name === params.filterModel[key].values[index]) {
                filterArray.push(obj1.id)
              }
            })
          })

        if (filterArray.length) {
          key = filterArray
            .map(function (el: any, idx: number) {
              console.log(el, idx)
              return key + '=' + el
            })
            .join('&')
          appUrl = `${appUrl}`.concat('&' + key)
          setAppUrl(appUrl)
          // paramUrl = `&sort=${sort}&sort_key=${sortkey}`.concat('&' + key)
          // setParamUrl(paramUrl)
        }
      }
    }
  }

  function setAdditionalParams() {
    // console.log(props)
    const info: any = localStorage.getItem('requestInfo') as string
    const requestInfo = JSON.parse(info)
    if (requestInfo) {
      for (var key in requestInfo.body) {
        if (requestInfo.body.hasOwnProperty(key)) {
          appUrl = `${appUrl}`.concat('&' + `${key}=${requestInfo.body[key]}`)
          setAppUrl(appUrl)
        }
      }
    }
  }
  let selectedCustomerFilters: any = []
  function setCustomerFilterParams() {
    // console.log(props)
    selectedCustomerFilters = []
    const info: any = localStorage.getItem('requestInfo') as string
    const requestInfo = JSON.parse(info)
    if (
      requestInfo &&
      requestInfo.body.selectedFilterByCustomer &&
      requestInfo.body.selectedFilterByCustomer.length
    ) {
      // for (var i = 0; requestInfo.body.selectedFilterByCustomer.length; i++) {
      console.log(requestInfo, selectedCustomerFilters)

      if (requestInfo.body.hasOwnProperty('selectedFilterByCustomer')) {
        console.log(selectedCustomerFilters)
        requestInfo.body.selectedFilterByCustomer.map((obj: any) => {
          selectedCustomerFilters.push(obj.id)
        })
      }

      if (selectedCustomerFilters.length) {
        let paramKey = 'customer_name'
        // paramKey = selectedCustomerFilters
        //  .map(function (el: any, idx: number) {
        //    console.log(el, idx)
        //    return paramKey + '=' + el
        //  })
        //  .join('&')
        // appUrl = `${appUrl}`.concat('&' + paramKey)
        // setAppUrl(appUrl)

        paramKey = selectedCustomerFilters
          .map(function (el: any, idx: number) {
            return paramKey + '[' + idx + ']=' + el
          })
          .join('&')
        appUrl = `${appUrl}`.concat('&' + paramKey)
        setAppUrl(appUrl)
        // console.log(paramKey)
        // paramUrl = `&sort=${sort}&sort_key=${sortkey}`.concat('&' + key)
        // setParamUrl(paramUrl)
      }
      // }
    }
  }

  let customfilterArray: Array<[]> = []
  function getCustomFilterIds() {
    const info: any = localStorage.getItem('requestInfo') as string
    const requestInfo = JSON.parse(info)

    for (var key in requestInfo.body.selectedCustomFilters) {
      if (requestInfo.body.selectedCustomFilters.hasOwnProperty(key)) {
        customfilterArray = []
        //requestInfo.body.serverFilterOptions &&
          //requestInfo.body.serverFilterOptions[key].map((obj1: any) => {
            requestInfo.body.selectedCustomFilters[key].map((obj: any) => {
              console.log(obj.name)
              //if (obj1.name === requestInfo.body.selectedCustomFilters[key][index]) {
                customfilterArray.push(obj.id)
              //}
            })
          //})

        if (customfilterArray.length) {
          key = customfilterArray
            .map(function (el: any, idx: number) {
              return key + '[' + idx + ']=' + el
            })
            .join('&')
          appUrl = `${appUrl}`.concat('&' + key)
          setAppUrl(appUrl)
          // paramUrl = `&sort=${sort}&sort_key=${sortkey}`.concat('&' + key)
          // setParamUrl(paramUrl)
        }
      }
    }
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
      {loading && (
        <div className='aggrid-pixel-spinner'>
          <PiSpinner color='primary' size={50} libraryType='atalskit' />
        </div>
      )}
      <AgGridReact
        // ref={gridRef}
        pagination
        rowModelType='serverSide'
        serverSideStoreType='partial'
        paginationPageSize={25}
        cacheBlockSize={25}
        // getContextMenuItems={getContextMenuItems}
        rowHeight={50}
        defaultColDef={{ flex: 1 }}
        cacheQuickFilter
        columnDefs={props.columns}
        sideBar={sidebarPanel}
        // rowData={rowData}
        // overlayLoadingTemplate="loadingTemplate"
        animateRows
        onPaginationChanged={(e: PaginationChangedEvent) => pageChanged(e)}
        {...props}
        onGridReady={onGridReady}
      />
    </div>
  )
  // if (libraryType === ATALASLIT_LIBRARY) {
  //   return AgGridTemplate(props)
  // } else {
  //   return DefaultTemplate()
  // }
}

// function DefaultTemplate() {
//   return <div></div>
// }
