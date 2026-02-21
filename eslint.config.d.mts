import type {
	Linter,
} from 'eslint';
import type parser from '@typescript-eslint/parser';

declare const config: ({
	readonly rules: Readonly<Linter.RulesRecord>,
} | {
	name?: string,
	rules?: object,
} | {
	ignores: string[],
} | {
	languageOptions: {
		parser: typeof parser,
		parserOptions: {
			project: string[],
		},
	},
	files?: undefined,
	ignores?: undefined,
} | {
	files: string[],
	ignores: string[],
	languageOptions?: undefined,
})[];

export default config;
