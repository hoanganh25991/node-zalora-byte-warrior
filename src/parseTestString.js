const os = require("os")
const parseTestString = (str) => {
    const nxn = []
    // const eol = "\n"
    const eol = os.EOL
    const rows = str.split(eol).filter(rows => rows)
    rows.forEach(row => {
        const rowArr = row.split("").map(numStr => Number(numStr))
        nxn.push(rowArr)
    })
    console.log(nxn)
    return nxn
}

var exports = module.exports = parseTestString