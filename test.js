const entro_hash = require("./index.js")
const input1 = "message1"
const input2 = "message2"
let entropy = entro_hash(input1, 0)
entropy = entro_hash(input2, entropy)
console.log("0x" + entropy.toString(16))
