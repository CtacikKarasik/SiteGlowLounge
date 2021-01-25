let requirejs = require('requirejs');

requirejs.config({
    baseUrl: '.',
    nodeRequire: require,
    paths: {
        js: 'src/js',
        vm: 'src/js/vm'
    }
});

requirejs('test/tests');
