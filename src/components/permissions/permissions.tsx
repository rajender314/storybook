import { useEffect, useState } from 'react'
import { BaseProps } from '../../piConstant'
import { generatePermissionsTemplate } from './permissions.generator'

export type InputProps = {
  name: string
  type: string
  options: Array<any>
  children: Array<any>
  [x: string]: string | object | Array<any> | number
}
export class PiPermissionsProps extends BaseProps {
  inputObject: InputProps
  values: any
  onValueChange: (e: object, obj?: any, val?: any) => void
}

/**
 *
 * @param props this component takes PiPermissionsProps as input
 * @returns  returns component based on library type
 */
export default function PiPermissions(props: PiPermissionsProps) {
  console.log(props)
  const [permProps, setPermProps]: any = useState(props)
  useEffect(() => {
    setPermProps(props)
  }, [props.values])
  if (permProps) {
    const newprops = new PiPermissionsProps()
    return generatePermissionsTemplate({ ...newprops, ...permProps })
  } else {
    return null
  }
}
