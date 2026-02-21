import type {
	ESLint,
	Linter,
} from 'eslint';

declare const config: ({
	readonly plugins: Record<string, ESLint.Plugin>,
	readonly rules: Readonly<Linter.RulesRecord>,
} | {
	name?: string,
	rules?: object,
} | {
	ignores: string[],
} | {
	files: string[],
	ignores: string[],
})[];

export default config;
