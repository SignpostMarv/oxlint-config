[![Coverage Status](https://coveralls.io/repos/github/SignpostMarv/eslint-config/badge.svg?branch=main)](https://coveralls.io/github/SignpostMarv/eslint-config?branch=main)
[![Workflow Status](https://github.com/SignpostMarv/eslint-config/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/SignpostMarv/eslint-config/actions/workflows/node.js.yml?query=branch%3Amain)

# Installation

`npm install --save-dev @signpostmarv/eslint-config`

# Usage

```js
import {typescript} from '@signpostmarv/eslint-config';
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
	...typescript,
];
```
