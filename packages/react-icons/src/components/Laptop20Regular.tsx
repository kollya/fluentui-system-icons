import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Laptop20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 7c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm2-1a1 1 0 00-1 1v5a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1H5z" fill={primaryFill} /><path d="M2 15.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
};

export default Laptop20Regular;