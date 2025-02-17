/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare type InputProps = {
    name: string;
    type: string;
    options: Array<any>;
    children: Array<any>;
    [x: string]: string | object | Array<any> | number;
};
export declare class PiPermissionsProps extends BaseProps {
    inputObject: InputProps;
    values: any;
    onValueChange: (e: object, obj?: any, val?: any) => void;
}
/**
 *
 * @param props this component takes PiPermissionsProps as input
 * @returns  returns component based on library type
 */
export default function PiPermissions(props: PiPermissionsProps): import("react").JSX.Element | null;
