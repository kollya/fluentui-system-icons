import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Ribbon20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 8A6 6 0 114 8a6 6 0 0112 0z" fill={primaryFill} /><path d="M10 15c1.49 0 2.87-.46 4-1.25v3.75a.5.5 0 01-.8.4L10 16l-3.2 1.9a.5.5 0 01-.8-.4v-3.75A6.97 6.97 0 0010 15z" fill={primaryFill} /></svg>;
};

export default Ribbon20Filled;