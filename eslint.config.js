// eslint.config.js
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
	{
		name: 'app/files-to-lint',
		files: ['**/*.{js,mjs,jsx,vue}'],
	},

	globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**']),

	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},

	js.configs.recommended,

	...pluginVue.configs['flat/essential'],

	// Desactiva reglas conflictivas con Prettier
	prettierConfig,

	// Activa Prettier como regla ESLint (Y MUY IMPORTANTE: especifica archivos)
	{
		files: ['**/*.{js,vue}'],
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			'vue/multi-word-component-names': 'off',
			'prettier/prettier': [
				'error',
				{
					printWidth: 100,
					bracketSpacing: true,
					arrowParens: 'avoid',
					singleQuote: true,
					useTabs: true, // 🔥 tú elegiste tabs: true
					tabWidth: 4,
					semi: true,
					trailingComma: 'es5',
					endOfLine: 'lf',
				},
			],
		},
	},
]);
