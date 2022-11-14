module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'es2015', 'react'],
  plugins: [
    'transform-class-properties',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
      },
    ],
  ],
};
