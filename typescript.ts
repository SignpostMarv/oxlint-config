import config from './javascript.js';
import typescript_eslint from 'typescript-eslint';

import type {
	Linter,
} from 'eslint';

export const typescript: (
	| {
		readonly rules: Readonly<Linter.RulesRecord>;
	}
	| {
		name?: string;
		rules?: object;
	}
	| { ignores: string[]; }
)[] = [
	...config,
	...typescript_eslint.configs.recommendedTypeChecked,
];

export default typescript;
