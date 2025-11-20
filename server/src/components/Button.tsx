import { type FC } from 'react';

interface ButtonProps {
  label: string;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ label, className }) => {
  const layout = `p-4 w-24 h-12 rounded`;
  const flex = `flex justify-center items-center`;

  const colors = `bg-green-900 text-text-secondary`;
  const hoverColors = `hover:bg-green-900`;

  const hover = ` ${hoverColors}`;

  return (
    <button className={`${layout} ${flex} ${colors} ${hover} ${className}`} type='button'>
      {label}
    </button>
  );
};
