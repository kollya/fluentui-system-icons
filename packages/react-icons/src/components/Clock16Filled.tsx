import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Clock16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm-.5 3a.5.5 0 00-.5.5v3c0 .28.23.5.5.5h2a.5.5 0 000-1H8V5.5a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
};

export default Clock16Filled;