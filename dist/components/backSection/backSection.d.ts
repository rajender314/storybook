/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type BackProps = {
    name: string;
    route: string;
    className?: string;
};
export declare class PiBackSectionProps extends BaseProps {
    backOptions: BackProps;
}
/**
 *
 * @param props this component takes PiBackSectionProps as input
 * @returns  returns component based on library type
 */
export default function PiBackSection(props: PiBackSectionProps): import("react").JSX.Element;
