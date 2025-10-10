// eslint-disable-next-line imports/no-unresolved
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

// eslint-disable-next-line imports/no-default-export
export default config;
