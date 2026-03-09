install:
	@npm install

build--declarations:
	@./node_modules/.bin/tsc --allowJs --declaration --emitDeclarationOnly --target esnext --moduleResolution bundler --allowImportingTsExtensions ./eslint.config.mjs
	@./node_modules/.bin/tsc --allowJs --declaration --emitDeclarationOnly --target esnext --moduleResolution bundler --allowImportingTsExtensions ./eslint.config.js.mjs

build: build--declarations
	@echo 'building from ./tsconfig.app.json'
	@./node_modules/.bin/tsc --project ./tsconfig.app.json

lint--tsc:
	@echo 'running syntax check'
	@./node_modules/.bin/tsc --project ./tsconfig.app-check.json

lint--prettier:
	@echo 'running prettier'
	@./node_modules/.bin/prettier . --check

lint--eslint:
	@echo 'fixing issues with declaration files'
	@./node_modules/.bin/eslint --fix './eslint.*.d.mts'
	@echo 'checking eslint for all issues with typescript files'
	@./node_modules/.bin/eslint --config ./eslint.config.ts --cache --ignore-pattern './eslint.config.ts' './**/*.ts'
	@echo 'build config'
	@./node_modules/.bin/tsc --project ./tsconfig.eslint.json
	@echo 'checking eslint for all issues with config'
	@./node_modules/.bin/eslint --config eslint.config.js.mjs --cache './**/*.mjs'

lint: lint--prettier lint--tsc lint--eslint

.PHONY: coverage
coverage: build
	@node --experimental-test-coverage ./test.ts

coverage--lcov: build
	@node --experimental-test-coverage ./test.ts --test-reporter=lcov --test-reporter-destination=coverage/lcov.info

npm-prep: build lint
	@echo 'building from ./tsconfig.app-npm.json'
	@./node_modules/.bin/tsc --project ./tsconfig.app-npm.json
	@npm publish --dry-run
