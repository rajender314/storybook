import React, { Fragment, useEffect, useState } from 'react'
// import { ATALASLIT_LIBRARY } from '../../piConstant'
// import AgGridTemplate from './aggrid.template'
import { PiGridProps } from './grid2'
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
  let [requestProps, setRequestProps]: any = useState(props)
  const newprops = new PiGridProps()
  let [appUrl, setAppUrl]: any = useState('')
  const [loading, setloading] = useState(true)

  let [gridapi, setGridApi]: any = useState(null)
  // let [props1, setProps]: any = useState(null)
  let [columnsApi, setColumnApi]: any = useState()
  let [allowAutoResize, setAllowAutoResize]: any = useState(false)

  const onGridReady = (params: any) => {
    console.log(props)
    gridapi = params.api
    setGridApi(gridapi)
    columnsApi = params.columnApi
    setColumnApi(columnsApi)
    // props1 = props
    // setProps(props1)
    if (props.onGridReady) {
      props.onGridReady(params)
      setTimeout(() => {
        const dataSource = ServerSideDatasource(requestProps)
        gridapi.setServerSideDatasource(dataSource)
      }, 1000)
    }
  }

  useEffect(() => {
    // ;(async () => {
    console.log(newprops, props)
    requestProps = {}
    requestProps = { ...newprops, ...props }
    console.log(requestProps)
    setRequestProps({ ...requestProps })
    // const dataSource =  ServerSideDatasource(requestProps)
    // if (gridapi) {
    //  console.log(1111111)
    //  gridapi.setServerSideDatasource(dataSource)
    // }
    // })()
  }, [])
  useEffect(() => {
    if (gridapi) {
      setTimeout(() => {
        const dataSource = ServerSideDatasource(requestProps)
        gridapi.setServerSideDatasource(dataSource)
      }, 1000)
    }
  }, [props.requestInfo])

  //  useEffect(() => {
  //  if (columnsApi ) {
  //    setTimeout(() => {
  //      autoSizeAll(columnsApi)
  //    }, 2000)
  //  }
  //}, [columnsApi])
  useEffect(() => {
    if (columnsApi && columnsApi.getAllColumns() && allowAutoResize) {
      console.log('autosize')
      var allColumnIds: any = []
      columnsApi.getAllColumns().forEach(function (column: any) {
        allColumnIds.push(column.colId)
      })
      columnsApi.autoSizeColumns(allColumnIds)
      console.log(allColumnIds)
    }
  }, [columnsApi, allowAutoResize])

  useEffect(() => {
    if (columnsApi && !allowAutoResize) {
      console.log('state')
      columnsApi.applyColumnState({
        state: props.requestInfo.columnsStateData,
        applyOrder: true
      })
    }
  }, [columnsApi, allowAutoResize, props.requestInfo.columnsStateData])

  function allowAutoResizeColumns(coldata: any) {
    console.log(coldata)
    let allow_resize = false
    if (coldata && coldata.length) {
      for (let i = 0; i < coldata.length; i++) {
        if (coldata[i].width > 350) {
          allow_resize = false
          break
        } else {
          allow_resize = true
        }
      }
    }

    return allow_resize
  }
  const autoSizeAll = () => {
    // const colList = columnsApi.getColumnState()
    const colList = props.requestInfo.columnsStateData
    console.log(colList)
    //for (let i = 0; i < colList.length; i++) {
    //  if (colList[i].width > 350) {
    //    console.log(colList)
    //    setAllowAutoResize(false)
    //    break
    //  } else {
    //    setAllowAutoResize(true)
    //  }
    //}
    const is_allow = allowAutoResizeColumns(colList)
    console.log(is_allow)
    setAllowAutoResize(is_allow)
  }
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

  function pageChanged(e: PaginationChangedEvent) {
    console.log(e)
  }
  const [viewAccess, setViewAccess] = useState(true)
  function ServerSideDatasource(requestProps: any) {
    return {
      getRows: function (params: any) {
        setloading(true)

        console.log(
          '[Datasource] - rows requested by grid: ',
          params.request,
          props
        )
        console.log(requestProps)
        // params.api.showLoadingOverlay()

        const sort = params.request.sortModel.length
          ? params.request.sortModel[0].sort
          : ''
        const sortkey = params.request.sortModel.length
          ? params.request.sortModel[0].colId
          : ''

        setTimeout(function () {
          //if(props.requestInfo) {

          // const info: any = localStorage.getItem('requestInfo') as string
          const info: any = props.requestInfo
          const requestInfo = info
          if (requestInfo && Object.keys(requestInfo).length > 0) {
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
              let url = ''
              url = props.requestInfo.url

              // if (props.pageNumber === undefined || props.pageNumber === null) {
              page = params.request.endRow / props.cacheBlockSize || 1
              // } else {
              //   page = props.pageNumber
              // }
              // console.log(page)
              //requestInfo.url = ''
              url = `${props.requestInfo.url}?page=${page}&perPage=${
                props.cacheBlockSize || 25
              }&sort=${sort}&sort_key=${sortkey}`
              appUrl = url
              console.log(requestInfo, url)
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
              const searchValue: any = info.searchkey
                ? info.searchkey
                : localStorage.getItem('globalSearch')

              if (searchValue && searchValue.length) {
                //appUrl = `${appUrl}&search=${searchValue}`
                //setAppUrl(appUrl)

                const url = new URL(appUrl)
                url.searchParams.set('search', searchValue)
                console.log(url)
                appUrl = url
                setAppUrl(appUrl)
              }
              localStorage.setItem('appUrl', appUrl)
            }
            fetch(appUrl, body)
              .then((resp) => resp.json())
              .then((data) => {
                // params.api.hideOverlay()
                if (data && data.result.success) {
                  setViewAccess(true)
                  //var response = data
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
                  setTimeout(() => {
                    if (!requestInfo.body.disableAutoSize) {
                      autoSizeAll()
                      autoSizeAll()
                    }
                  }, 100)
                } else if (data && data.result.status_code === 403) {
                  setViewAccess(false)
                  params.fail()
                } else {
                  setViewAccess(true)
                  params.fail()
                }
              })
          } else {
            params.success({
              rowData: [],
              rowCount: 0
            })
          }
          //}
        }, 200)
      }
    }
  }

  let filterArray: Array<[]> = []
  function getColumnFilterIds(params: any) {
    // const info: any = localStorage.getItem('requestInfo') as string

    const info: any = props.requestInfo
    const requestInfo = info
    console.log(props)
    console.log(requestProps)
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
    // const info: any = localStorage.getItem('requestInfo') as string
    const info: any = props.requestInfo
    const requestInfo = info

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
    console.log(props)
    // const info: any = localStorage.getItem('requestInfo') as string
    const info: any = props.requestInfo
    const requestInfo = info
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
    // const info: any = localStorage.getItem('requestInfo') as string
    const info: any = props.requestInfo
    const requestInfo = info
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
    const info: any = props.requestInfo
    const requestInfo = info

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
    <Fragment>
      {viewAccess ? (
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
      ) : (
        <div className='access-denied'>
          <p>Sorry, you do not have permissions to access this page.</p>
        </div>
      )}
    </Fragment>
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
