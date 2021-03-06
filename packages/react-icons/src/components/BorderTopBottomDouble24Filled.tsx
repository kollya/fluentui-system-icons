import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BorderTopBottomDouble24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a1 1 0 002 0 1 1 0 011-1h12a1 1 0 011 1 1 1 0 102 0 3 3 0 00-3-3H6a3 3 0 00-3 3z" fill={primaryFill} /><path d="M5 11a1 1 0 10-2 0v2a1 1 0 102 0v-2z" fill={primaryFill} /><path d="M4 18a1 1 0 110-2h16a1 1 0 110 2H4z" fill={primaryFill} /><path d="M4 21a1 1 0 110-2h16a1 1 0 110 2H4z" fill={primaryFill} /><path d="M20 10a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
};

export default BorderTopBottomDouble24Filled;