import React from 'react';
export declare class PiTabGroupProps {
    selected?: number;
    id: string;
    onChange?: (e: number) => void;
    className?: string;
}
declare function PiTabGroup(props: React.PropsWithChildren<PiTabGroupProps>): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof PiTabGroup>;
export default _default;
