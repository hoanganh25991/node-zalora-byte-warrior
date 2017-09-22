const count = require("./src/count")
const parseTestString = require("./src/parseTestString")
const testSummary = require("./src/testSummary")

const n3 =
`
000
010
101
`
const expectn3 = 1
const resultn3 = count(parseTestString(n3))
testSummary.expect(resultn3, expectn3)

const n6 =
`
100100
001010
000000
110000
111000
010100
`
const expectn6 = 3
const resultn6 = count(parseTestString(n6))
testSummary.expect(resultn6, expectn6)

const n4 = 
`
0001
0000
1100
0110
`
const expectn4 = 2
const resultn4 = count(parseTestString(n4))
testSummary.expect(resultn4, expectn4)

testSummary.log()
