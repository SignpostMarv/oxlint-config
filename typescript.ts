// eslint-disable-next-line imports/no-unresolved
import typescript_eslint from 'typescript-eslint';

import type {
	Linter,
} from 'eslint';

import {
	javascript,
} from './javascript.js';

const typescript: (
	| {
		readonly rules: Readonly<Linter.RulesRecord>,
	}
	| {
		name?: string,
		rules?: object,
	}
	| { ignores: string[] }
)[] = [
	...javascript,
	...typescript_eslint.configs.recommendedTypeChecked,
	{
		rules: {
			'@typescript-eslint/consistent-type-imports': ['error', {
				fixStyle: 'separate-type-imports',
				prefer: 'type-imports',
			}],
		},
	},
];

export {
	typescript,
};
