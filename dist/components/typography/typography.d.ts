import React from 'react';
declare type PiComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'pbold' | 'th' | 'small' | 'xs' | 'caption' | 'label' | 'success' | 'error' | 'warning' | 'default';
export declare class PiTypographyProps {
    component?: PiComponentType;
    className?: string;
}
declare function PiTypography(props: React.PropsWithChildren<PiTypographyProps>): React.ReactElement<{
    className: string;
}, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
declare const _default: React.MemoExoticComponent<typeof PiTypography>;
export default _default;
