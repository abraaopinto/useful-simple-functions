# useful-simple-functions

Useful simple functions.

## Installing

Using npm:
```bash
npm i useful-simple-functions
```
Using bower:
```bash
bower install useful-simple-functions
```
Using yarn:

```bash
yarn add useful-simple-functions
```

## Example

### note: CommonJS usage

```js
const useful = require('useful-simple-functions');

useful.capitalize('text text');
// TEXT TEXT

useful.sanitize('A@B#C$1%2&3');
// ABC123
```
## Methods

### sanitize

```js
const useful = require('useful-simple-functions');

useful.sanitize('A@B#C$1%2&3');
// ABC123
```

### capitalize

```js
const useful = require('useful-simple-functions');

useful.capitalize('text text');
// TEXT TEXT
```

### sanitizeAndCapitalize

```js
const useful = require('useful-simple-functions');

useful.sanitizeAndCapitalize('a@b#c$1%2&3');
// ABC123
```

### capitalizeFirst

```js
const useful = require('useful-simple-functions');

useful.capitalizeFirst('any text');
// Any text
```