export type themes = 'light' | 'dark';

export const useTheme = (): themes => {
  /**@todo implementar lógica para buscar tema das configurações do usuário, por padrão vamos retornar o tema light */

  return 'light';
};
