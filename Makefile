deploy: install
	npm run dep

install:
	npm install --registry=http://registry.npm.taobao.org

dev: install
	npm run dev
