<h4 align="center">

Create a CLI help footer to use with `meow` and `meow-cli-help`

<br>
<br>

</h4>

The footer supplies help text for boolean flags that default to `true`
<br>
<br>
Example: `--no-clear`, `--no-debug`, etc.

<br>

# cli-footer

## Install

```sh
npm install cli-footer
```

<br>

## Usage

```js
import makeFooter from 'cli-footer'

const flags = {
  beer: {
    type: `boolean`,
    default: true,
    desc: `Print a beer to the console`,
  },
  fear: {
    type: `boolean`,
    default: true,
    desc: `Share your fears with the console`,
  },
  steer: {
    type: `boolean`,
    default: true,
    desc: `Pass the wheel to the console`,
  },
}

// See screenshot below for output
const footer = makeFooter('cli-cmd', flags)
```

![cli-footer output screenshot](/cli-footer_output.PNG)

<br />

## API

### footer(command, flags, [NUM_EXAMPLES])

#### ❯ command

Type: `string`<br>
**Required**

The name of the command to show in the example

##### ❯ flags

Type: `object`<br>
**Required**

The flags that will be passed to `cli-meow-help`

##### ❯ NUM_EXAMPLES

Type: `integer`<br>
Default: `3`
**Optional**

Number of flags to include in the example

<br>

<small>**KEY**: `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `🤖 TEST`

> _I use [Emoji-log](https://github.com/ahmadawais/Emoji-Log), you should try it and simplify your git commits._

</small>

<br>

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.
