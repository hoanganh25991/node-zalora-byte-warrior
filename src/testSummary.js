const track = {
    pass: 0,
    total: 0
}
const FgWhiteBright = "\x1b[37m\x1b[1m"
const BgGreen = "\x1b[42m"
const BgRed = "\x1b[41m"

const testSummary = {
    expect: (result, expect) => {
        track.total += 1
        if(result === expect){
            track.pass += 1
        }
    },
    
    log: () => {

        const bgColor = track.pass === track.total ? BgGreen : BgRed
      console.log(`${bgColor}${FgWhiteBright}%s\x1b[0m`, `[INFO] Summary pass/total: ${track.pass}/${track.total}`)
    }
}

var exports = module.exports = testSummary