import { BaseProps } from '../../piConstant';
export declare type resizeTypes = 'auto' | 'vertical' | 'horizontal' | 'none';
export declare class PiTextAreaProps extends BaseProps {
    label?: string;
    name: string;
    helpText?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    placeholder?: string;
    appearance?: 'standard' | 'none' | 'subtle';
    isCompact?: boolean;
    minimumRows?: number;
    value?: string;
    defaultValue?: string;
    maxHeight?: string;
    onChange?: (e: any) => void;
    maxLength?: number;
    isIcons?: boolean;
    emitSave?: any;
    emitUndo?: any;
    isMandatory?: any;
    convertToCapital?: boolean;
}
/**
 *
 * @param props this component takes PiTextAreaProps as input
 * @returns  returns component based on library type
 */
export default function PiTextArea(props: PiTextAreaProps): any;
