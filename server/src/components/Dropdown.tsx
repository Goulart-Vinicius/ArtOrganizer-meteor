import { useState, useRef, type FC, type ReactElement } from 'react';

interface DropdownProps {
  childrenWidthPx?: number;
  ButtonChildren: ReactElement;
  children: ReactElement;
  className?: string;
}

export const Dropdown: FC<DropdownProps> = ({
  ButtonChildren,
  children,
  childrenWidthPx = 192, // (w-48)
  className = '',
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<'left' | 'right'>('left');

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (!open && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const spaceOnRight = window.innerWidth - buttonRect.right;

      if (spaceOnRight < childrenWidthPx) {
        setMenuPosition('right');
      } else {
        setMenuPosition('left');
      }
    }
    setOpen(!open);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        className='cursor-pointer'
        type='button'
        onClick={handleClick}
        ref={buttonRef}
      >
        {ButtonChildren}
      </button>

      {open && (
        <div
          className={`
            absolute top-full mt-2 rounded-md shadow-lg bg-white p-4
            ${menuPosition === 'left' ? 'left-0' : 'right-0'}
          `}
          style={{ width: `${childrenWidthPx}px` }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
