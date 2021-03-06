import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CellularData520Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 12a.5.5 0 01.5.41v3.09a.5.5 0 01-1 .09V12.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
};

export default CellularData520Regular;