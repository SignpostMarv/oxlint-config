install:
	@npm install

lint--prettier:
	@echo 'running prettier'
	@./node_modules/.bin/prettier . --check

lint: lint--prettier

npm-prep: lint
	@echo 'building from ./tsconfig.app-npm.json'
	@./node_modules/.bin/tsc --project ./tsconfig.app-npm.json
	@npm publish --dry-run
