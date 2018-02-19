module.exports = {
   "extends": "airbnb",
   "rules":
        {
           "indent": ["error", 4, { "SwitchCase": 1 }],
           "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
           "react/jsx-indent": ["error", 4],
           'jsx-a11y/no-noninteractive-element-interactions': ['error',
                {
                    handlers: [
                        'onMouseDown',
                        'onMouseUp',
                        'onKeyPress',
                        'onKeyDown',
                        'onKeyUp',
                    ],
                },
            ],
        },
        "env": {
            "browser": true,
            "node": true
        }
};
