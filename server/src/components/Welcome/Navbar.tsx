import { type FC, useMemo } from 'react';
import { Logo } from '../Logo';
import { Button } from '../Button';

export const Navbar: FC = () => {
  const navigations = useMemo(() => {
    return [
      { label: 'Home', path: '#banner1' },
      { label: 'Adicionar', path: '#banner1' },
      { label: 'Organizar', path: '#banner1' },
      { label: 'Compartilhar', path: '#banner1' },
      { label: 'Contatos', path: '#banner1' },
    ];
  }, []);

  return (
    <nav className='flex w-full justify-between items-center min-h-20 bg-background-light text-text-primary '>
      <Logo theme='dark' />

      <ul className='flex gap-4 justify-center items-center'>
        {navigations.map((navigation) => {
          return (
            <li key={navigation.path}>
              <a href={navigation.path}> {navigation.label} </a>
            </li>
          );
        })}
      </ul>

      <div>
        <Button label='Login' />
        <Button label='Cadastrar' />
      </div>
    </nav>
  );
};
