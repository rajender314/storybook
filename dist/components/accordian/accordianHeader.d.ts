import React from 'react';
export declare type PiAccordianProps = {
    className?: string;
};
/**
 *
 * @param props this component takes PiAccordionProps as input
 * @returns  returns component based on library type
 */
export default function PiAccordianHeader({ children, ...props }: React.PropsWithChildren<PiAccordianProps>): React.JSX.Element;
