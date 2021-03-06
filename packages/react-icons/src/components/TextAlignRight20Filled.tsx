import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextAlignRight20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.25c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.25z" fill={primaryFill} /><path d="M2 9.25c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.25z" fill={primaryFill} /><path d="M9.75 13.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /></svg>;
};

export default TextAlignRight20Filled;