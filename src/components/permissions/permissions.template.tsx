import React, { SyntheticEvent, useState, useEffect } from 'react'
import PiRadioGroup from '../radioGroup'
import PiCheckbox from '../checkbox'
import PiToggle from '../toggle'
import PiSelect from '../select'

export function getRadioTemplate(
  inputObject: any,
  values: any,
  onValueChange: any
) {
  // const initialValue =
  //  values && values[inputObject.id] ? values[inputObject.id] : ''
  // console.log(initialValue)
  // const [value, setValue] = useState(initialValue)

  // useEffect(() => {
  //  // setValue(initialValue)
  //  console.log('USeEffect Called')
  // }, [initialValue])
  return (
    <PiRadioGroup
      name={inputObject.code}
      onChange={({ currentTarget: { value } }: SyntheticEvent<any>) => {
        console.log(value, inputObject)

        values[inputObject.id] = value
        // console.log(values[inputObject.id])
        // console.log(value)
        // if (inputObject.allow_child !== undefined) {
        //  console.log(inputObject)
        //  if (value !== '0') {
        //    inputObject.allow_child = true
        //  } else {
        //    inputObject.allow_child = false
        //  }
        // }
        // setValue(value)
        onValueChange(values, inputObject, value)
      }}
      options={inputObject.options}
      value={values[inputObject.id]}
    />
  )
}

export function getCheckboxTemplate(
  inputObject: any,
  values: any,
  onValueChange: any
) {
  const initialValue =
    values && values[inputObject.id] ? values[inputObject.id] : ''
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  return (
    <PiCheckbox
      isChecked={value}
      name={inputObject.code}
      size='large'
      onChange={(e: any) => {
        setValue(e.target.checked)
        values[inputObject.id] = e.target.checked
        onValueChange(values)
      }}
      value={inputObject.value}
    />
  )
}

export function getToggleTemplate(
  inputObject: any,
  values: any,
  size: any,
  onValueChange: any
) {
  const initialValue =
    values && values[inputObject.id] ? values[inputObject.id] : ''
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  return (
    <PiToggle
      isChecked={value}
      direction='row'
      name={inputObject.code}
      size={size}
      onChange={(e: any) => {
        setValue(e.target.checked)
        values[inputObject.id] = e.target.checked
        onValueChange(values)
      }}
      value={inputObject.value}
    />
  )
}

export function getSelectTemplate(
  inputObject: any,
  values: any,
  onValueChange: any
) {
  console.log(values[inputObject.id])
  console.log(inputObject)
  // const initialValue =
  //  values && values[inputObject.id] ? values[inputObject.id] : ''
  // const [value, setValue] = useState(initialValue)

  // useEffect(() => {
  //  // console.log(values)
  //  inputObject.options.map((option: any) => {
  //    if (option.value == initialValue) {
  //      setValue(option)
  //    }
  //  })
  // }, [initialValue, inputObject])

  return (
    <div className='select-box'>
      <PiSelect
        name='select'
        onChange={(e: any) => {
          // setValue(e)
          values[inputObject.id] = e
          inputObject = { ...inputObject, ...e }
          onValueChange(values, inputObject)
          // console.log(hasInputChanged)
        }}
        options={inputObject.options}
        // options={[
        //  {
        //    label: 'Yes',
        //    value: '1'
        //  },
        //  {
        //    label: 'No',
        //    value: '2'
        //  }
        // ]}
        // value={{
        //  label: 'Yes',
        //  value: '1'
        // }}
        value={values[inputObject.id]}
        placeholder='Select'
        variant='standard'
        isSearchable={false}
      />
    </div>
  )
}
