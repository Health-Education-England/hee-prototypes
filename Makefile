install:
	docker-compose run nodejs npm install

build:
	docker-compose run nodejs npm run build

build-prod:
	docker-compose run nodejs npm run build --prod

serve: build
	docker-compose run -p 3000:3000 -p 35729:35729 nodejs npm run serve

watch:
	docker-compose run -p 3000:3000 -p 35729:35729 nodejs npm run watch

test: build backstop-test playwright-test

npm-audit:
	docker-compose run nodejs npm audit

open-shell:
	docker-compose up -d nodejs
	docker-compose exec nodejs sh
	docker-compose stop

backstop-ref:
	docker-compose run backstopjs npm run backstop:ref

backstop-test:
	docker-compose run backstopjs npm run backstop:test

backstop-approve:
	docker-compose run backstopjs npm run backstop:approve

backstop-generate-config:
	docker-compose run backstopjs npm run backstop:generate-config

playwright-test:
	docker-compose run playwright npx playwright test --config ./tests/playwright/config/playwright.config.js

playwright-test-trace:
	docker-compose run playwright npx playwright test --config ./tests/playwright/config/playwright.config.js  --trace on

playwright-serve-report:
	docker-compose run -p 9323:9323 playwright npx playwright show-report /app/tests/playwright/report --host 0.0.0.0
