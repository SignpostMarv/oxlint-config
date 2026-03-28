install:
	@npm install

lint--prettier:
	@echo 'running prettier'
	@./node_modules/.bin/prettier . --check

lint: lint--prettier

npm-prep: lint
	@npm publish --dry-run
