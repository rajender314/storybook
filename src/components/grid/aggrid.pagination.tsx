import React from 'react'

export const withGridPagination =
  (WrapperComponent: any) =>
  ({ ...props }) => {
    const onGridReady = (params: any) => {
      if (props.onGridReady) {
        props.onGridReady(params)
      }
      const dataSource = ServerSideDatasource()
      params.api.setServerSideDatasource(dataSource)
    }

    function ServerSideDatasource() {
      return {
        getRows: function (params: any) {
          console.log(
            '[Datasource] - rows requested by grid: ',
            params.request,
            props
          )
          setTimeout(function () {
            const requestInfo = Object.assign({}, props.requestInfo)
            let body = {
              method: requestInfo.method
            }
            if (requestInfo.method !== 'GET') {
              body['body'] = JSON.stringify({
                startRow: params.request.startRow,
                endRow: params.request.endRow,
                ...requestInfo.body
              })
            } else {
              requestInfo.url =
                requestInfo.url +
                `?startRow=${params.request.startRow}&endRow=${params.request.endRow}`
            }
            fetch(requestInfo.url, body)
              .then((resp) => resp.json())
              .then((data) => {
                if (data) {
                  var response = data.data
                  params.success({
                    rowData: response,
                    rowCount: data.totalCount
                  })
                } else {
                  params.fail()
                }
              })
          }, 200)
        }
      }
    }
    return (
      <WrapperComponent
        rowModelType={'serverSide'}
        serverSideStoreType={'partial'}
        pagination={true}
        paginationPageSize={20}
        cacheBlockSize={10}
        animateRows={true}
        {...props}
        onGridReady={onGridReady}
      ></WrapperComponent>
    )
  }
