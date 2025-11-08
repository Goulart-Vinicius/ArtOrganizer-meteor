import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import sortKeysPlugin from 'eslint-plugin-typescript-sort-keys';
import { defineConfig, globalIgnores } from 'eslint/config'; // 'globalIgnores' estava certo
import tseslint from 'typescript-eslint'; // Importado corretamente

export default defineConfig([
  // 1. Ignorar arquivos primeiro
  globalIgnores([".meteor/*", "node_modules/*"]),

  // 2. Configurações base (em ordem)
  js.configs.recommended, // Base do JavaScript (removida a duplicata)
  ...tseslint.configs.recommended, // <-- ISSO ESTAVA FALTANDO. Use '...'
  pluginReact.configs.flat.recommended, // Base do React
  sortKeysPlugin.configs.recommended, // Plugin de ordenação (mais simples)

  // 3. Suas configurações personalizadas
  {
    languageOptions: {
      // O 'parser' é definido automaticamente pelo 'tseslint.configs.recommended'
      // Remova o 'parser: {}' vazio.
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    // As regras do sortKeysPlugin já vêm no 'sortKeysPlugin.configs.recommended'
    // Então as seções 'plugins' e 'rules' aqui não são mais necessárias.

    settings: {
      react: {
        version: 'detect', // Perfeito
      },
    },
  },
]);
