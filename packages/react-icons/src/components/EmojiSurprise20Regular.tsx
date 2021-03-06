import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const EmojiSurprise20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 9.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M11.75 12.5a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0z" fill={primaryFill} /><path d="M12.5 9.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" fill={primaryFill} /></svg>;
};

export default EmojiSurprise20Regular;