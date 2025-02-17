import { BaseProps } from '../../piConstant'
import { generatefileUploaderComponentTemplate } from './passwordValidator.generator'

export class PiPasswordValidatorProps extends BaseProps {
  password: string = 'image/*'
  maxSize:number = 18
  minSize:number = 8

}

/**
 *
 * @param props this component takes PiFileUploaderProps as input
 * @returns  returns component based on library type
 */
export default function PiPasswordValidator(props: PiPasswordValidatorProps) {
  const newprops = new PiPasswordValidatorProps()
  return generatefileUploaderComponentTemplate({ ...newprops, ...props })
}
