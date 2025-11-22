import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
	// Archivos a ignorar
	{
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**'],
	},

	// Configuración base de JavaScript
	js.configs.recommended,

	// Configuración recomendada de Vue 3
	...pluginVue.configs['flat/recommended'],

	// Configuración de globals y lenguaje
	{
		files: ['**/*.{js,mjs,jsx,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
	},

	// Desactiva reglas conflictivas con Prettier
	prettierConfig,

	// Configuración de Prettier y reglas personalizadas
	{
		files: ['**/*.{js,mjs,jsx,vue}'],
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			// Prettier como error
			'prettier/prettier': [
				'error',
				{
					printWidth: 100,
					bracketSpacing: true,
					arrowParens: 'avoid',
					singleQuote: true,
					useTabs: true,
					tabWidth: 4,
					semi: true,
					trailingComma: 'es5',
					endOfLine: 'auto',
				},
			],

			// Reglas de Vue
			'vue/multi-word-component-names': 'off',
			'vue/no-v-html': 'warn',
			'vue/require-default-prop': 'off',
			'vue/require-prop-types': 'warn',
			'vue/no-unused-vars': 'error',
			'vue/component-name-in-template-casing': ['error', 'PascalCase'],
			'vue/html-indent': ['error', 'tab'],
			'vue/max-attributes-per-line': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'always',
						normal: 'never',
						component: 'always',
					},
				},
			],

			// Reglas de JavaScript
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'warn',
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'prefer-const': 'error',
			'no-var': 'error',
		},
	},
];
