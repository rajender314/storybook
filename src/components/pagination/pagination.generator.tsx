import React, { Fragment, SyntheticEvent, useContext } from 'react'
import Pagination from '@atlaskit/pagination'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiPaginationProps } from './pagination'
import PiThemeContext from '../../themeContext'
import { PiPaginationClass } from './pagination.css'

/**
 *
 * @param props as  PiPaginationProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generatePaginationTemplate({
  libraryType,
  ...props
}: PiPaginationProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return DefaultTemplate(props)
  }
}

/**
 *
 * @param props as  PiPaginationProps
 * @returns Atlaskit Pagination template
 */
function AtlasKitTemplate({ pages, onChange, ...props }: PiPaginationProps) {
  const pagesList = getPages(pages)
  const theme = useContext(PiThemeContext)
  function handleChange(_: SyntheticEvent, page: number) {
    if (onChange) {
      onChange(page)
    }
  }
  return (
    <div className={`${PiPaginationClass(theme)} pipagination-wrapper`}>
      <Pagination pages={pagesList} {...props} onChange={handleChange} />
    </div>
  )
}

/**
 *
 * @param props as  PiPaginationProps
 * @returns Default Pagination template
 */
function DefaultTemplate(props: PiPaginationProps) {
  const pages = getPages(props.pages)
  function handleChange(page: number) {
    if (props.onChange) {
      props.onChange(page)
    }
  }
  return (
    <Fragment>
      {pages.map((page) => (
        <div key={page} onClick={() => handleChange(page)}>
          {page}
        </div>
      ))}
    </Fragment>
  )
}

function getPages(page: number) {
  return Array(page)
    .fill(0)
    .map((_, i) => i + 1)
}
