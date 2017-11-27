({
    baseUrl: '.',
    paths: {
        'jsmodt': 'node_modules/jsmodt/dist/amd/index'
    },
    include: [
        'jsmodt'
    ],
    name: 'vendor',
    out: 'build/vendor.js',
    optimize: 'none',
    generateSourceMaps: false
})