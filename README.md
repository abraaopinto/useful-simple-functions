# useful-simple-functions

![GitHub package.json version](https://img.shields.io/github/package-json/v/abraaopinto/useful-simple-functions?style=plastic)
![npm](https://img.shields.io/npm/v/useful-simple-functions?style=plastic)
![npm](https://img.shields.io/npm/dw/useful-simple-functions?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/abraaopinto/useful-simple-functions?style=plastic)
![GitHub](https://img.shields.io/github/license/abraaopinto/useful-simple-functions?style=plastic)

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

### isNull

```js
const useful = require('useful-simple-functions');

useful.isNull('any text');
// false

useful.isNull(null);
// true
```

### isNotNull

```js
const useful = require('useful-simple-functions');

useful.isNotNull('any text');
// true

useful.isNotNull(null);
// false
```

### isEmpty

```js
const useful = require('useful-simple-functions');

useful.isEmpty('any text');
// false

useful.isEmpty('');
// true

useful.isEmpty({});
// true

useful.isEmpty([]);
// true

useful.isEmpty(new Set());
// true

useful.isEmpty(new Map());
// true
```

### isNotEmpty

```js
const useful = require('useful-simple-functions');

useful.isNotEmpty('any text');
// true

useful.isNotEmpty('');
// false

useful.isNotEmpty({});
// false

useful.isNotEmpty([]);
// false

useful.isNotEmpty(new Set());
// false

useful.isNotEmpty(new Map());
// false
```

### isBlank

```js
const useful = require('useful-simple-functions');

useful.isBlank('any text');
// false

useful.isBlank('  ');
// true
```

### isNumber

```js
const useful = require('useful-simple-functions');

useful.isNumber('1.0');
// true

useful.isNumber(1.0);
// true

useful.isNumber(.0);
// true

useful.isNumber(0);
// true

useful.isNumber(-1.0);
// true

useful.isNumber('any text');
// false

useful.isNumber('  ');
// false

useful.isNumber('1,0');
// false

useful.isNumber(',0');
// false
```

### isCpf

```js
const useful = require('useful-simple-functions');

useful.isCpf('123.456.789-09');
// true

useful.isCpf('999.999.999-99');
// false

```

### isCnpj

```js
const useful = require('useful-simple-functions');

useful.isCnpj('52.851.132/0001-20');
// true

useful.isCnpj('00.000.000/0000-00');
// false

```

### isCpfCnpj

```js
const useful = require('useful-simple-functions');

useful.isCpfCnpj('123.456.789-09');
// true

useful.isCpfCnpj('52.851.132/0001-20');
// true

useful.isCpfCnpj('999.999.999-99');
// false

useful.isCpfCnpj('00.000.000/0000-00');
// false

```

## License

[MIT](LICENSE)