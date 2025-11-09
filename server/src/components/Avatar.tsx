import { useState, useRef, type FC } from 'react';
import userAvatarFallback from '../assets/avatar/userAvatarFallback.svg';

const MENU_WIDTH_PX = 192;

export const Avatar: FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<'left' | 'right'>('left');

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    // 5. Medir a posição ANTES de abrir o dropdown
    if (!dropdown && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const spaceOnRight = window.innerWidth - buttonRect.right;

      // 6. Decidir a posição
      if (spaceOnRight < MENU_WIDTH_PX) {
        setMenuPosition('right'); // Inverte
      } else {
        setMenuPosition('left'); // Padrão
      }
    }

    setDropdown(!dropdown);
  };

  return (
    <div className='flex items-center justify-start p-4 '>
      <div className='relative' ref={containerRef}>
        <button
          className='cursor-pointer'
          type='button'
          onClick={handleClick}
          ref={buttonRef}
        >
          <img src={userAvatarFallback} />
        </button>
        {dropdown && (
          <ul
            className={`absolute top-full ${menuPosition === 'left' ? 'left-0' : 'right-0'} mt-2 bg-background-light text-text-primary w-48`}
          >
            <li>oi</li>
          </ul>
        )}
      </div>
    </div>
  );
};
