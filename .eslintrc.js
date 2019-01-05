module.exports = {
	"parser": 'babel-eslint',
	"env": {
		"commonjs": true,
		"es6": true,
		"node": true,
		"jest": true,
		"mocha": true,
	},
	"extends": [ "eslint:recommended", "plugin:react/recommended" ],
	"parserOptions": {
		"ecmaVersion": 8,
		"sourceType": "module"
	},
	"rules": {
		"indent": [ "error", "tab", { "SwitchCase": 1 } ],
		"linebreak-style": [ "error", "windows" ],
		"quotes": [ "error", "single" ],
		"semi": [ "error", "always" ],
		"no-console": "off",
		"no-unused-vars": [ "error", { "args": "none" } ]
	}
};
