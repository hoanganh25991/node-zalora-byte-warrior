const count = require("./src/count")
const parseTestString = require("./src/parseTestString")

const n3 =
`
000
010
101
`

const n6 =
`
100100
001010
000000
110000
111000
010100
`

count(parseTestString(n3))
count(parseTestString(n6))