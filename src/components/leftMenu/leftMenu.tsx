import { BaseProps } from '../../piConstant'
import { generateHeaderMenuTemplate } from './leftMenu.generator'

type MenuOptions = {
  key: string
  label: string
  display?: boolean
}

export type PiMenuOptions = {
  children?: MenuOptions[]
  key: string
  label: string
  icon?: any
  href?: string
  email?: string
  display?: boolean
  code?: string
}

export class PiLeftMenuProps extends BaseProps {
  options: PiMenuOptions[] = []
  activeKey: string
  onMenuClick: (e: MenuOptions) => void
}

/**
 *
 * @param props this component takes PiLeftMenuProps as input
 * @returns  returns component based on library type
 */
export default function PiLeftMenu(props: PiLeftMenuProps) {
  const newprops = new PiLeftMenuProps()
  return generateHeaderMenuTemplate({ ...newprops, ...props })
}
