import React from 'react'

export const withGridStatic =
  (WrapperComponent: any) =>
  ({ ...props }) => {
    return (
      <WrapperComponent
        {...props}
      ></WrapperComponent>
    )
  }