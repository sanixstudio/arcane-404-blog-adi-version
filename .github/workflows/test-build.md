```yaml
name: Continuous Integration & Continuous Deployment
# CI : merge code in :: CD : release code out

# source code in Virtual Machine
# current working directory, use command lines

on:
	pull_request:
		paths:
			- '**.html'
			- '**.js'
			- '**.jsx'
		paths-ignore:
			- '**.md'
			- '**.yml'
			- '**.yaml'
		branch: [ main, develop ]

jobs:
	test_pull_request:
		runs-on: ubuntu-latest
		steps:
			- uses: action/checkout@v2
			- uses: actions/setup-node@v2
				with:
					node-version: 14.x.x
			- run: npm ci
			# - run: npm test

	build_pull_request:
		runs-on: ubuntu-latest
			- uses: action/checkout@v2
			- uses: actions/setup-node@v2
				with:
					node-version: 14.x.x
			- run: npm ci
			# - run: npm build
			# deploy to netlify || heroku
```
