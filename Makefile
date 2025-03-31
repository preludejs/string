clean:
	@rm -Rf cjs mjs test/*.js

build-cjs:
	@rm -Rf cjs
	@npx tsc -m commonjs -d --outDir cjs
	@echo '{"type":"commonjs"}' > cjs/package.json

build-mjs:
	@rm -Rf mjs
	@npx tsc -d --outDir mjs

build: build-cjs build-mjs

rebuild: clean build

test:
	@npx jest

update:
	@npx npm-check --update --save-exact

preversion: rebuild test

postversion:
	@git push
	@git push --tags
	@npm publish --access public

.PHONY: test
