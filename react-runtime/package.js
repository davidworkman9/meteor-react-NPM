'use strict';
Package.describe({
    summary: 'React-runtime to make blaze-to-react and react-template-helper work with NPM React.',
    version: '0.14.7'
});

Package.onUse(function (api) {
    api.use([
        'ecmascript',
        'modules',
        'react'
    ], ['client', 'server']);

    api.imply([
        'modules',
        'ecmascript',
        'react'
    ]);

    api.export('React');
    api.export('ReactDOM');
});


