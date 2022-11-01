IGNORE = --ignore=build,public,docs,README.md
OUT_DIR = build
ENTRY_POINT = src/main.ts
CONFIG = --config deno.json
PERMISSIONS = --allow-net --allow-env

BUNDLED := $(OUT_DIR)/deno-project-template.bundle.js
COMPILED := $(OUT_DIR)/deno-project-template

default: install

install:
	deno cache deps.ts
	deno cache test_deps.ts

dev-all: dev-fmt dev

fmt:
	deno fmt $(IGNORE)

test:
	deno test

.mk-out:
	mkdir -p $(OUT_DIR)

clean:
	rm -rf $(OUT_DIR)

run:
	deno run index.ts $(CONFIG) $(PERMISSIONS)

dev:
	deno run --watch $(PERMISSIONS) $(ENTRY_POINT)
