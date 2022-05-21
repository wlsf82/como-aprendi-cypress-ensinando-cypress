/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  const options = {
    printLogsToConsole: 'always',
    printLogsToFile: 'always',
    outputRoot: config.projectRoot + '/logs/',
    outputTarget: {
      'out.txt': 'txt',
      'out.json': 'json',
    }
  }
  require('cypress-terminal-report/src/installLogsPrinter')(on, options)
  return config
}
