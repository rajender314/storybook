import { BaseProps } from '../../piConstant'
import { generateHeaderMenuTemplate } from './headerMenu.generator'

type MenuOptions = {
  key: string
  label: string
  display?: boolean
}

export type PiMenuOptions = {
  children?: MenuOptions[]
  key: string
  label: string
  icon?: React.ReactNode
  href?: string
  display?: boolean
}

export type PiProfileMenuOptions = {
  id: string
  name: any
  route: string
  url: string
}

export class PiHeaderMenuProps extends BaseProps {
  xsImage: string
  image: string
  options: PiMenuOptions[] = []
  profileOptions: PiProfileMenuOptions[] = []
  activeKey: string
  onMenuClick: (e: MenuOptions) => void
  onProfileClick: (e: PiMenuOptions) => void
  userImage: string
  className?: string
  headerDropdownOptions?: any
  onOpenChange?: (e: any) => void
}

/**
 *
 * @param props this component takes PiHeaderMenuProps as input
 * @returns  returns component based on library type
 */
export default function PiHeaderMenu(props: PiHeaderMenuProps) {
  const newprops = new PiHeaderMenuProps()
  return generateHeaderMenuTemplate({ ...newprops, ...props })
}
