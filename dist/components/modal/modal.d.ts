import React from 'react';
export declare class PiModalProps {
    height?: number | string;
    width?: number | 'small' | 'medium' | 'large' | 'x-large' | 'auto';
    onClose?: () => void;
    isOpen: boolean;
    className?: string;
}
declare function PiModal(props: React.PropsWithChildren<PiModalProps>): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof PiModal>;
export default _default;
