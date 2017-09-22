const quickCheckInput = (nxn) => {
    try {
        const numRow = nxn.length;
        const firstRow = nxn[0];
        const numCol = firstRow.length;
        if(numRow !== numCol) {
            throw new Error()
        }
    } catch(err) {
        throw new Error("invalid input")
    }
}

const checkAround = (lastRow, row, index) => {
    // [0][0][0] // row1
    // [0][1][0] // row2
    const sameRowValid = row[index - 1] !== 1 && row[index + 1] !== 1
    const lastRowValid = lastRow[index - 1] !== 1 && lastRow[index] !== 1 && lastRow[index + 1] !== 1

    // Specical case
    // CASE 1: first check
    // [0][0][0]
    // [1][1'][1'] // still should add him IN
    const oneAtFirst = row[index-1] !== 1
    const case1 = lastRowValid && oneAtFirst

    return sameRowValid && lastRowValid || case1
}

const count = (nxn) => {
    quickCheckInput(nxn)
    // nxn now invalid
    // Loop through each line to check if should increase count
    // RULE:
    //    1. It is 1
    //    2. Any thing round above it should NOT contain 1
    // [0][0][0] // row1
    // [0][1][0] // row2
    // Ok, this 1 should be increased

    const numByteWarriors = nxn.reduce((carry, row) => {
        const {lastRow} = carry
        const countOnRow = row.reduce((carry, cell, index) => {
            const cellAs1 = cell === 1
            const shouldIncrease = checkAround(lastRow, row, index);
            if(cellAs1 && shouldIncrease)
                carry += 1
            return carry
        }, 0)
        
        const {count: curr} = carry
        const count = curr + countOnRow
        carry = {count,lastRow: row}
        return carry
    }, {count: 0, lastRow: []})

    console.log(numByteWarriors.count)
}


var exports = module.exports = count