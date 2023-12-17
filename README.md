# Entro Hash
## Description
Entro Hash is a 32-bit, non-cryptographic hashing algorithm.

## Code Example
The following code demonstrates an example implementation in Node.js with the test.js file included in this package.

``` javascript
const entro_hash = require("./index.js")
const input1 = "message1"
const input2 = "message2"
let entropy = entro_hash(input1, 0)
entropy = entro_hash(input2, entropy)
console.log("0x" + entropy.toString(16))
```

To run the code example in Node.js, execute the following command.

``` console
node test
```

## Purchase
[EntroCraft](https://entrocraft.com/) maintains this open-source package with the permissive MIT license.

It's provided as a convenient code evaluation tool for the [premium Entro Hash library written in C](https://entrocraft.com/dungeon/hashing-algorithms/entro-hash/).

It's designed for 32-bit unsigned integers and won't function as intended in JavaScript.

Converting code in this package from JavaScript to another programming language is discouraged and may be subject to either [purchasing a license](https://entrocraft.com/dungeon/hashing-algorithms/entro-hash/#license) for the premium library in C or attributing other OSI licenses.

Developers who don't use the C programming language can still [purchase credits](https://entrocraft.com/pricing/) and learn C to become better JavaScript developers and support package maintenance.
