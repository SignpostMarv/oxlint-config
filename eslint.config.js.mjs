import {
	javascript,
} from './index.js';

const config = [
	...javascript,
	{
		files: [
			'./**/*.mjs',
		],
		ignores: [
			'./**/*.js',
		],
	},
];


export default config;
