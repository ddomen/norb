# Norb
[![License](https://img.shields.io/badge/License-MIT-1a237e.svg)](./LICENSE)
[![Email](https://img.shields.io/badge/Contact-email-00897b.svg)](mailto:daniele.domenichelli.5+ddomen@gmail.com)
[![Donate](https://img.shields.io/badge/Donate-PayPal-4caf50.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=6QCNG6UMSRCPC&lc=GB&item_name=ddomen&item_number=aoop&no_note=0&cn=Add%20a%20message%3a&no_shipping=2&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)
[![Donate](https://img.shields.io/badge/Donate-bitcoin-4caf50.svg)](https://blockchain.info/payment_request?address=1FTkcYbdwsHEbJBS3c1xD62KKCKskT14AE&amount_local=5&currency=EUR&nosavecurrency=true&message=ddomen%20software)

**Node OR Browser**

detect if the script is running on node or in a browser

## Getting Started
### Installing
This library is easy to install by cloning the repo or installing it through npm too:

Local installation
```
npm install norb
```
Global installation
```
npm install -g norb
```

## Usage
* **Require Node**
```javascript
const norb = require('norb')(module);
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
This method allow to export an object in the correct way, independant if the code is in a Node or a Browser environment. *(?)* In the Browser context you have to assign a `name?` that will point to `window[name]` object; the `mode?` help to decide in which way the object will be overwritten can be 0: *( conserve )* that preserve the original `window[name]` if present, 1: *( overwrite )* that overwrite anyway, 2: *( merge )* that merge both object.

* NB Browser doesn't support system API and Node doesn't support some of the Broswer API

* **import** `import(path)`
Enclose and import a Browser module, like it would be a Node module.

* NB Browser doesn't support system API and Node doesn't support some of the Broswer API

* **require** `require(path, [name?, mode?,] callback)`
Require a Node module, like it would be a Browser module. In Browser the method is async so you must define a callback for take the module result; with `name` parameter you can autoassign the module to the `window[name]`. *(?)* In the Browser context you have to assign a `name?` that will point to `window[name]` object; the `mode?` help to decide in which way the object will be overwritten can be 0: *( conserve )* that preserve the original `window[name]` if present, 1: *( overwrite )* that overwrite anyway, 2: *( merge )* that merge both object.

* NB Browser doesn't support system API and Node doesn't support some of the Broswer API

## Example
File mymodule.js
```javascript
//Module to be exported
const norb = require('norb')(module);

var export = {};
export.test = function(){console.log('sample function for testing')};

norb.export(export,'myModule');
```
File index.html (Browser)
```html
...
<script src="./norb.js"></script>
<script>
  norb.require('./mymodule.js',(module)=>module.test());   // "sample function for testing"
</script>
...
```
File node.js (Node)
```javascript
const norb = require('norb')(module);
const myModule = norb.require('./mymodule');

myModule.test();  // "sample function for testing"
```


## Contacts
If you like the project feel free to contact me on my [![Email](https://img.shields.io/badge/Contact-email-00897b.svg)](mailto:daniele.domenichelli.5+ddomen@gmail.com).

Something gone wrong? Feel free to rise an issue!

Did you like this project and it was usefull? Help me improve my work:

[![Donate](https://img.shields.io/badge/Donate-PayPal-4caf50.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=6QCNG6UMSRCPC&lc=GB&item_name=ddomen&item_number=aoop&no_note=0&cn=Add%20a%20message%3a&no_shipping=2&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted)
[![Donate](https://img.shields.io/badge/Donate-bitcoin-4caf50.svg)](https://blockchain.info/payment_request?address=1FTkcYbdwsHEbJBS3c1xD62KKCKskT14AE&amount_local=5&currency=EUR&nosavecurrency=true&message=ddomen%20software)
