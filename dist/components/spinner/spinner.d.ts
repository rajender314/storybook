/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiSpinnerProps extends BaseProps {
    apperance?: 'inherit' | 'invert';
    size?: number;
    color: 'secondary' | 'inherit' | 'primary';
}
/**
 *
 * @param props this component takes PiSpinnerProps as input
 * @returns  returns component based on library type
 */
export default function PiSpinner(props: PiSpinnerProps): import("react").JSX.Element;
