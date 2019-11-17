module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react', // integração do prettier com react
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint', // para entender as ultimas versões do EcmaScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier', // adicionando mais um plugin
  ],
  rules: {
    'react/jsx-props-no-spreading':'off',
    'react/state-in-constructor':'off',
    'react/static-property-placement':'off',
    'prettier/prettier': 'error',
    'react/state-in-constructor': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off', // para garantir que import/export sem ser apenas o i/e default
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import":{
        rootPathSuffix: "src"
      }
    }
  }
};
