import config from './index.js';
import parser from '@typescript-eslint/parser';

export default [
	{
		languageOptions: {
			parser,
			parserOptions: {
				project: ['./tsconfig.eslint.json'],
			},
		},
	},
	...config,
	{
		files: [
			'./**/*.ts',
		],
		ignores: [
			'./**/*.d.ts',
		],
	},
];
