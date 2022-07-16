/**
 * @name cli-footer
 *
 * * Generate a CLI help menu footer
 * * Works well with `meow` and `cli-meow-help` packages
 *
 * ? Reasoning: Newer versions of `meow` validate flags
 * ? containing hyphens ('-').
 *
 * ? As such, flags beginning with '--no' are invalid.
 * ? However, `meow` still generates the flags.
 * * ^ The '--no' flags do not appear in the help menu
 * * when using `cli-meow-help`
 *
 * @author Sharif <https://github.com/selkasse>
 */

import chalk from 'chalk'
const ERROR_TEXT = chalk.red(`cli-footer ERROR`)

export default (command, flags, NUM_EXAMPLES = 3) => {
  if (!command || typeof command !== 'string') {
    return `${ERROR_TEXT}: must supply command as a String`
  }
  if (!flags || typeof flags !== 'object') {
    return `${ERROR_TEXT}: must supply flags as an Object`
  }

  let booleanExamples = []
  //* Only add the flags that:
  //? 1. Have a default
  //? 2. The default is TRUE
  Object.keys(flags).forEach((option) => {
    if (flags[option].type === 'boolean' && flags[option].default === true) {
      booleanExamples.push(option)
    }
  })

  //* Dim everything except for the '--no'
  let exampleString = `${chalk.green(`${command}`)} `
  for (let i = 0; i < NUM_EXAMPLES; i++) {
    //* Do not add if booleanExamples.length is less than NUM_EXAMPLES
    if (booleanExamples[i]) {
      exampleString += `${chalk.yellow(`--no${chalk.dim(`-`)}`)}`
      exampleString += `${chalk.yellow.dim(booleanExamples[i])} `
    }
  }

  let footer = `${chalk.yellow.bold.dim.inverse(` NOTE `)}`

  footer += `\n\n${chalk.yellow(`--no`)} can be prepended to any boolean option`
  footer += `\n(if the default value is ${chalk.dim.yellow(`true`)})`
  footer += `\n\nThis will toggle the value to ${chalk.dim.yellow(`false`)}`
  footer += `\n\n${chalk.yellow.bold.dim.inverse(` EXAMPLE `)}\n\n`
  footer += exampleString

  return footer
}
