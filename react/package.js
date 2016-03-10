'use strict';
Package.describe({
    summary: 'React from NPM, temp solution for problems with loading two version of react.',
    version: '0.14.7'
});

Package.onUse(function (api) {
    api.use([
        'ecmascript',
        'modules'
    ], ['client', 'server']);

    api.imply([
        'modules',
        'ecmascript',
        'react-meteor-data'
    ]);

    api.addFiles('index.js', ['client', 'server']);

    api.export('React');
    api.export('ReactDOM');
});


