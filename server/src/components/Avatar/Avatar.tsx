import { type FC } from 'react';
import userAvatarFallback from '../../assets/avatar/userAvatarFallback.svg';
import { Dropdown } from '../Dropdown';

export const Avatar: FC = () => {
  return (
    <div className='flex items-center justify-start p-4 '>
      <Dropdown ButtonChildren={<img src={userAvatarFallback} />} childrenWidthPx={120}>
        <ul>
          <li>oi</li>
        </ul>
      </Dropdown>
    </div>
  );
};
