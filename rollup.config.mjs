import esbuild from 'rollup-plugin-esbuild'

const common = {
    external: ['undici', 'tslib'],
    plugins: [esbuild()],
}

const umdInfo = {
    format: 'umd',
    name: 'undici'
}

const generatedCode = {
    arrowFunctions: true,
    constBindings: true,
    objectShorthand: true
}

const browser = {
    ...common,
    input: 'src/browser.ts',
    output: [{ 
        generatedCode, 
        file: 'dist/umd/browser.cjs', 
        sourcemap: true,
        ...umdInfo,
    }, {
        generatedCode,
        file: 'dist/esm/browser.js',
        format: 'es',
        sourcemap: true
    }]
}

const node = {
    ...common,
    input: 'src/node.ts',
    output: [{
        generatedCode, 
        file: 'dist/umd/node.cjs', 
        sourcemap: true,
        globals: {
            undici: 'Undici'
        },
        ...umdInfo,
    }, {
        generatedCode,
        file: 'dist/esm/node.js',
        format: 'es',
        sourcemap: true
    }]
}

export default [browser, node]