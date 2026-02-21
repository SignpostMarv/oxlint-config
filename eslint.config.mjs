
import parser from '@typescript-eslint/parser';

import {
	typescript,
} from './index.js';

const config = [
	{
		languageOptions: {
			parser,
			parserOptions: {
				project: ['./tsconfig.eslint.json'],
			},
		},
	},
	...typescript,
	{
		files: [
			'./**/*.ts',
		],
		ignores: [
			'./**/*.d.ts',
		],
	},
];


export default config;
