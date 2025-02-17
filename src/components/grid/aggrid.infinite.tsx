import React from 'react'

export const withGridInfinite =
  (WrapperComponent: any) =>
  ({ ...props }) => {
    const onGridReady = (params: any) => {
      console.log('infinite')
      if (props.onGridReady) {
        props.onGridReady(params)
      }
      const dataSource = InfiniteSideDatasource()
      params.api.setDatasource(dataSource)
    }

    function InfiniteSideDatasource() {
      return {
        getRows: function (params: any) {
          console.log('[Datasource] - rows requested by grid: ', params)
          setTimeout(function () {
            const requestInfo = Object.assign({}, props.requestInfo)
            let body = {
              method: requestInfo.method
            }
            if (requestInfo.method !== 'GET') {
              body['body'] = JSON.stringify({
                startRow: params.startRow,
                endRow: params.endRow,
                ...requestInfo.body
              })
            } else {
              requestInfo.url =
                requestInfo.url +
                `?startRow=${params.startRow}&endRow=${params.endRow}`
            }
            fetch(requestInfo.url, body)
              .then((resp) => resp.json())
              .then((data) => {
                if (data) {
                  var response = data.data
                  params.successCallback(response, data.totalCount)
                } else {
                  params.failCallback()
                }
              })
          }, 200)
        }
      }
    }
    return (
      <WrapperComponent
        rowBuffer={0}
        rowSelection={'multiple'}
        rowModelType={'infinite'}
        cacheBlockSize={100}
        cacheOverflowSize={2}
        maxConcurrentDatasourceRequests={1}
        infiniteInitialRowCount={1000}
        maxBlocksInCache={10}
        {...props}
        onGridReady={onGridReady}
      ></WrapperComponent>
    )
  }
