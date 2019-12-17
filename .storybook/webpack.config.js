const path = require('path')

module.exports = async ({ config }) => {
  config.module.rules.push({
    resourceQuery: /blockType=story/,
    use: ['vue-storybook' ]
  })

  return config
}
