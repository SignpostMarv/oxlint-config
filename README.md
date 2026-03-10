[![Coverage Status](https://coveralls.io/repos/github/SignpostMarv/oxlint-config/badge.svg?branch=main)](https://coveralls.io/github/SignpostMarv/oxlint-config?branch=main)
[![Workflow Status](https://github.com/SignpostMarv/oxlint-config/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/SignpostMarv/oxlint-config/actions/workflows/node.js.yml?query=branch%3Amain)

# Installation

`npm install --save-dev @signpostmarv/oxlint-config`

# Usage

```json
{
	"$schema": "./node_modules/oxlint/configuration_schema.json",
	"extends": [
		"./node_modules/@signpostmarv/oxlint-config/.oxlintrc.typescript.json"
	]
}
```

```Makefile
lint--oxlint:
	@echo 'checking oxlint for all issues with typescript files'
	@./node_modules/.bin/oxlint --config ./.oxlintrc.typescript.json ./*.ts --ignore-pattern '**/**/*.d.ts'
	@echo 'build config'
	@./node_modules/.bin/tsc --project ./tsconfig.eslint.json
	@echo 'checking oxlint for all issues with config'
	@./node_modules/.bin/oxlint --config ./.oxlintrc.javascript.json './**/*.mjs'
```
