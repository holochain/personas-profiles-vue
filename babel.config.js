module.exports = {
  presets: [
    '@vue/app',
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    [require('@babel/plugin-proposal-class-properties'), { loose: true }]
  ]
}
