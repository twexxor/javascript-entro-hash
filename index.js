const entro_hash = function(input, entropy) {
  let i = 0

  while (i != input.length) {
    entropy ^= input[i]
    entropy += (~entropy ^ 1111111111) << 4
    entropy = (entropy << 31) + (entropy >> 1)
    entropy += ~entropy << 3
    entropy ^= ~entropy << 10
    entropy ^= 1111111111
    entropy ^= ~entropy << 13
    entropy += (~entropy + entropy) << 1
    i++
  }

  return entropy
}

if (
  typeof module != "undefined" &&
  typeof module.exports != "undefined"
) {
  module.exports = entro_hash
}
