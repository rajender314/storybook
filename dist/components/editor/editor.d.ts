/// <reference types="react" />
import { BaseProps } from '../../piConstant';
export declare class PiEditorProps extends BaseProps {
    value: any;
    onChange: (e: any) => void;
    className?: string;
    onKeyPress?: React.EventHandler<any>;
    onKeyDown?: React.EventHandler<any>;
    onKeyUp?: React.EventHandler<any>;
    readOnly?: boolean;
}
/**
 *
 * @param props this component takes PiEditorProps as input
 * @returns  returns component based on library type
 */
export default function PiEditor(props: PiEditorProps): import("react").JSX.Element;
