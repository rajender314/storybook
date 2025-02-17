import React from 'react'
import { ATALASLIT_LIBRARY } from '../../piConstant'
import { PiDateRangePickerClass } from './dateRangePicker.css'
import DatePicker from 'react-datepicker'
import { PiDateRangePickerProps } from './dateRangePicker'
import 'react-datepicker/dist/react-datepicker.css'

/**
 *
 * @param props as  PiDropdownMenuProps
 * @returns Template based on Library
 * if no library passed default HTML is returned
 */
export function generateDateRangeTemplate({
  libraryType,
  ...props
}: PiDateRangePickerProps) {
  if (libraryType === ATALASLIT_LIBRARY) {
    return AtlasKitTemplate(props)
  } else {
    return defaultTemplate()
  }
}

/**
 *
 * @param props as  PiDateRangePickerProps
 * @returns DropdownMenu template
 */
function AtlasKitTemplate({ ...props }: PiDateRangePickerProps) {
  console.log(props)

  //  const [dateRange, setDateRange] = useState([null, null])
  //  const [startDate, endDate] = dateRange
  const onDateRangeChanged = (update: any) => {
    console.log(update)
    props.onChange(update)
  }

  return (
    <div className={PiDateRangePickerClass()}>
      {/* <DropdownMenu trigger={props.label}>
        <DropdownItemGroup>
          {props.items.length
            ? props.items.map((value: DropdownElements) => {
                return (
                  <DropdownItem
                    onClick={() => props.onOpenChange(value)}
                    key={value.id}
                  >
                    {value.name}
                  </DropdownItem>
                )
              })
            : null}
        </DropdownItemGroup>
      </DropdownMenu> */}

      <DatePicker
        {...props}
        onChange={onDateRangeChanged}
        placeholderText={props.placeholderText}
      />
    </div>
  )
}

/**
 *
 * @param props as  PiDropdownMenuProps
 * @returns Default Spinner template
 */
function defaultTemplate() {
  return <div />
}
