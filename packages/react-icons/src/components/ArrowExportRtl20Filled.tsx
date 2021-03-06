import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ArrowExportRtl20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 3.75a.75.75 0 00-.75.75v11a.75.75 0 001.5 0v-11a.75.75 0 00-.75-.75z" fill={primaryFill} /><path d="M15 10a.75.75 0 00-.75-.75H4.06l2.72-2.72a.75.75 0 00-1.06-1.06l-4 4a.76.76 0 00-.22.53.75.75 0 00.22.53l4 4a.75.75 0 101.06-1.06l-2.72-2.72h10.19c.41 0 .75-.34.75-.75z" fill={primaryFill} /></svg>;
};

export default ArrowExportRtl20Filled;