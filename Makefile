dep: install
	npm run deploy

install:
	npm install --registry=http://registry.npm.taobao.org

dev: install
	npm run dev
