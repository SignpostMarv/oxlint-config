import {
	javascript as config,
} from './index.js';

export default [
	...config,
	{
		files: [
			'./**/*.mjs',
		],
		ignores: [
			'./**/*.js',
		],
	},
];
