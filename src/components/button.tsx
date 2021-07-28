import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import Icon from './Icon';

type props = {
  icon?: string;
  color?: 'white' | 'blue';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  border?: 'white' | 'blue' | 'dark' | 'gray';
  bg?: 'dark' | 'l-blue' | 'blue' | 'white' | 'none';
};
export default function Button(
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    props,
) {
  const {
    children,
    className,
    bg = 'blue',
    border = '',
    size = 'lg',
    color = 'white',
    icon = '',
  } = props;

  return (
    <button
      {...props}
      className={`button br-sm p-${size} ${className} ${bg}-bg ${color} b-${border}`}
    >
      {children}
      {icon && <Icon icon={icon + '.svg'} cname='ml-md' />}
    </button>
  );
}
