import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Layer20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 3.12a1 1 0 00-1 0L3.47 6.64a1 1 0 000 1.72l6.02 3.5a1 1 0 001 0l6.01-3.5a1 1 0 000-1.72l-6-3.52z" fill={primaryFill} /><path d="M3.07 9.65l6.44 3.62a1 1 0 00.98 0l6.44-3.62a1 1 0 01-.42 1.26l-6 3.5a1 1 0 01-1.01 0l-6.01-3.5a1 1 0 01-.42-1.26z" fill={primaryFill} /><path d="M3.07 12.1l6.44 3.63a1 1 0 00.98 0l6.44-3.63a1 1 0 01-.42 1.26l-6 3.5a1 1 0 01-1.01 0l-6.01-3.5a1 1 0 01-.42-1.26z" fill={primaryFill} /></svg>;
};

export default Layer20Filled;