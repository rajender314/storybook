/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiProgressIndicatorProps extends BaseProps {
    appearance: 'default' | 'help' | 'inverted' | 'primary';
    size?: 'small' | 'default' | 'large';
    spacing?: 'comfortable' | 'cozy' | 'compact';
    values: Array<string>;
    selectedIndex: number;
}
/**
 *
 * @param props this component takes PiProgressIndicatorProps as input
 * @returns  returns component based on library type
 */
export default function PiProgressIndicator(props: PiProgressIndicatorProps): import("react").JSX.Element;
