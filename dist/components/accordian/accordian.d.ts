import React from 'react';
export declare type PiAccordionProps = {
    allowMultipleExpanded?: boolean;
    allowZeroExpanded?: boolean;
    className?: string;
    onChange?: (e: any) => void;
};
/**
 *
 * @param props this component takes PiAccordionProps as input
 * @returns  returns component based on library type
 */
export default function PiAccordian({ children, ...props }: React.PropsWithChildren<PiAccordionProps>): React.JSX.Element;
