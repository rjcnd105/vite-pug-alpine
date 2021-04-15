module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    extends: [
        '@vue/prettier',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 12,
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'linebreak-style': ['error', 'unix'],
        'prettier/prettier': ['error'],
        'vue/no-multiple-template-root': 'off'
    }
}
