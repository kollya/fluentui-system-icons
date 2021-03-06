import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const NotebookSection24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.65 2h.1c.38 0 .7.28.74.65l.01.1v18.5a.75.75 0 01-1.5.1V20H9.25C8.01 20 7 18.99 7 17.75V6.25C7 5.01 8 4 9.25 4H15V2.75c0-.38.28-.7.65-.74l.1-.01h-.1z" fill={primaryFill} /></svg>;
};

export default NotebookSection24Filled;