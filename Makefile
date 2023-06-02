# Generate BackstopJS reference images
backstop-ref:
	docker-compose run backstopjs npm run backstop:ref

# Test build with BackstopJS again reference images
backstop-test:
	docker-compose run backstopjs npm run backstop:test

# Approve BackstopJS report results.
backstop-approve:
	docker-compose run backstopjs npm run backstop:approve

# Generate backstop.json config for debugging purposes.define
backstop-generate-config:
	docker-compose run backstopjs npm run backstop:generate-config
