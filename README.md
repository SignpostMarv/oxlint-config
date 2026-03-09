[![Coverage Status](https://coveralls.io/repos/github/SignpostMarv/oxlint-config/badge.svg?branch=main)](https://coveralls.io/github/SignpostMarv/oxlint-config?branch=main)
[![Workflow Status](https://github.com/SignpostMarv/oxlint-config/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/SignpostMarv/oxlint-config/actions/workflows/node.js.yml?query=branch%3Amain)

# Installation

`npm install --save-dev @signpostmarv/oxlint-config`

# Usage

```js
import {typescript} from '@signpostmarv/oxlint-config';
import parser from '@typescript-oxlint/parser';

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
