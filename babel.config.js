/**
 * @flow
 * @format
 */
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ],
    "@babel/preset-flow",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ]
};
