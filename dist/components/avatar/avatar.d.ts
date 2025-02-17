/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiAvatarProps extends BaseProps {
    appearance?: 'circle' | 'square';
    borderColor?: string;
    href?: string;
    isDisabled?: boolean;
    presence?: 'online' | 'offline' | 'busy' | 'focus';
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
    src?: string;
    status?: 'approved' | 'declined' | 'locked';
    target?: '_blank' | '_self' | '_top' | '_parent';
    onClick?: () => void;
    ref?: any;
}
/**
 *
 * @param props this component takes PiAvatarProps as input
 * @returns  returns component based on library type
 */
export default function PiAvatar(props: PiAvatarProps): import("react").JSX.Element;
