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

useful.sanitize('A@B#C$1%2&3');

```
## Methods

### sanitize

```js
const useful = require('useful-simple-functions');

useful.sanitize('A@B#C$1%2&3');
```

### capitalize

```js
const useful = require('useful-simple-functions');

useful.capitalize('text text');
```

### sanitizeAndCapitalize

```js
const useful = require('useful-simple-functions');

useful.sanitizeAndCapitalize('A@B#C$1%2&3');
```

### capitalizeFirst

```js
const useful = require('useful-simple-functions');

useful.capitalizeFirst('title');
```