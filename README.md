# Norb
Node OR Browser: detect if the script is running on node or in a browser

## Getting Started
### Installing
This library is easy to install by cloning the repo or installing it through npm too:

Local installation
```
npm install aoop
```
Global installation
```
npm install -g aoop
```

## Usage
* **Require Node**
```javascript
const norb = require('norb');
//{
//  isNode:boolean (true),
//  isBrowser:boolean (false),
//  export:[Function],
//  import:[Function],
//  require:[Function]
//  }
```

* **Require Browser**
```html
<script src="norb.js"></script>
```

* **isNode** *[Boolean]*: `true` if running in node
* **isBrowser** *[Boolean]*: `true` if running in browser
* **export**  `export(Object, name?, mode?)`
This method allow to export an object in the correct way, independant if the code is in a Node or a Browser environment. *(?)* In the Browser context you have to assign a `name?` that will point to `window[name]` object; the `mode?` help to decide in which way the object will be overwritten can be 0: *( preservative )* that preserve the original `window[name]` if present, 1: *( overwrite )* that overwrite anyway, 2: *( merge )* that merge both object.

* NB Browser doesn't support system API and Node doesn't support some of the Broswer API

* **import** `import(path)`
Enclose and import a Browser module, like it would be a Node module.

* NB Browser doesn't support system API and Node doesn't support some of the Broswer API

* **require** `require(path, [name?, mode?,] callback)`
Require a Node module, like it would be a Browser module. In Browser the method is async so you must define a callback for take the module result; you can autoassign the module to the `window[name]`. *(?)* In the Browser context you have to assign a `name?` that will point to `window[name]` object; the `mode?` help to decide in which way the object will be overwritten can be 0: *( preservative )* that preserve the original `window[name]` if present, 1: *( overwrite )* that overwrite anyway, 2: *( merge )* that merge both object.

* NB Browser doesn't support system API and Node doesn't support some of the Broswer API
