import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextColumnTwoRight20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M11 5.75a.75.75 0 00-.75-.75h-6.5a.75.75 0 000 1.5h6.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M17 8.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M11 8.75a.75.75 0 00-.75-.75h-6.5a.75.75 0 000 1.5h6.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M17 11.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M11 11.75a.75.75 0 00-.75-.75h-6.5a.75.75 0 000 1.5h6.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M17 14.75a.75.75 0 00-.75-.75h-2.5a.75.75 0 000 1.5h2.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M11 14.75a.75.75 0 00-.75-.75h-6.5a.75.75 0 000 1.5h6.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
};

export default TextColumnTwoRight20Filled;