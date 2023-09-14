import type { ComponentProps, FormEventHandler } from 'react';
import clsx from 'clsx';
// colors from palette: https://flatuicolors.com/palette/defo
// to demonstrate there can be also color a set
// 💡 we can also create colors using Record utility type but need to specify all keys

import { MouseEventHandler } from 'react';

// const colors: Record<'turquise' | 'emerald', string> = {
const colors = {
  turquise: '#1abc9c',
  emerald: '#2ecc71',
  'peter-river': '#3498db',
  amethyst: '#9b59b6',
  'wet-asphalt': '#34495e',
  'green-sea': '#16a085',
  nephritis: '#16a085',
  'belize-hol': '#2980b9',
  wisteria: '#8e44ad',
  midnight: '#2c3e50',
  'sun-flower': '#f1c40f',
  carrot: '#e67e22',
  alizarin: '#e74c3c',
  clouds: '#ecf0f1',
  concrete: '#95a5a6',
  orange: '#f39c12',
  pumpkin: '#d35400',
  pomegranate: '#c0392b',
  silver: '#bdc3c7',
  asbestos: '#7f8c8d',
};

type ColorType = keyof typeof colors;

type Props = {
  label: string;
  bgColor?: ColorType;
  color?: ColorType;
  // onClick: () => void // ⛔️ avoid using void when unecessary
  // onClick?: MouseEventHandler<HTMLButtonElement>; // ✅ better
  // className?: string;
};

const UserForm = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('something');
  };

  return (
    <div>
      <Button label="Click me!" onClick={handleClick} />
    </div>
  );
};

export const Button = ({
  label,
  bgColor,
  color,
  onClick,
  className,
  ...rest
}: ComponentProps<'button'> & Props) => {
  // Similar solutions are:
  // 1️⃣ using defined Props which should contain all needed props
  // }: Props) => {
  // 2️⃣ using only onClick props from defined props together with our custom props
  // Pick<ComponentProps<'button'>, 'onClick'> & Props) => {
  // 3️⃣ using destructuring assignment
  // export const Button = ({ label, bgColor, color, onClick }: Props) => {

  const _color = color ? colors[color] : '';
  const _bgColor = bgColor ? colors[bgColor] : '';

  const classes = clsx(
    'px-4 py-1',
    'text-sm text-white',
    'bg-blue-600',
    'font-semibold',
    'rounded-full border border-blue-200',
    'hover:text-white hover:bg-blue-500 hover:border-transparent',
    className
  );

  return (
    <button
      onClick={onClick}
      className={classes}
      style={{
        color: _color,
        backgroundColor: _bgColor,
      }}
      {...rest}
    >
      {label}
    </button>
  );
};
