module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "rules": {
	    "indent": [2, "tab"],
	    "no-dynamic-require":0,
	    "no-multi-spaces": 0,
	    "import/no-dynamic-require": 0,
	    "import/no-extraneous-dependencies": 0,
	    "import/newline-after-import": 0,
	    "no-undef": 0,
	    "no-console": 0,
	    "no-underscore-dangle": 0,
	    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
	    "no-use-before-define": 0,
	    "no-multi-str": 0,
	    "no-plusplus": 0,
	    "no-return-assign": 0,
	    "no-new-require": 0,
	    "function-paren-newline": 0,
	    "padded-blocks": 0,
	    "global-require": 0,
	    "arrow-body-style": 0,
	    "newline-per-chained-call": 0,
	    "object-curly-newline": 0,
	    "no-param-reassign": 0,
	    "no-trailing-spaces": 0,
	    "consistent-return": 0,
	    "max-len": ["error", { "code": 180 }],
	    "no-tabs": 0,
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};