WATCH = "\
	var arg = process.argv, path = arg[1], cmd = arg[2];  \
	require('chokidar') 																  \
		.watch(path, { ignoreInitial: true }) 						  \
		.on('all', function() { 													  \
			require('shelljs').exec(cmd) 										  \
		})"

build:
	browserify lib/main.js -o dist/bundle.js

watch:
	@ $(shell node -e $(WATCH) "lib**/*.js" "make build")
