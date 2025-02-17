/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiProductCardProps extends BaseProps {
    params?: number | string | object;
    name: string;
    description: string;
    button_lable: string;
    isDisabled?: boolean;
    src: string;
    onClick?: () => void;
    onAddToCartHandler?: () => void;
    onAddToWishListHandler?: () => void;
    onCompareHandler?: () => void;
}
/**
 *
 * @param props this component takes PiProductCardProps as input
 * @returns  returns component based on library type
 */
export default function PiProductCard(props: PiProductCardProps): import("react").JSX.Element;
