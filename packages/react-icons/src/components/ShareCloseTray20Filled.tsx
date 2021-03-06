import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShareCloseTray20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 16a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4zm6-10a.5.5 0 00-.5.5v5.8l-1.65-1.65a.5.5 0 00-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 00-.7-.7l-1.65 1.64V6.5A.5.5 0 0010 6z" fill={primaryFill} /></svg>;
};

export default ShareCloseTray20Filled;