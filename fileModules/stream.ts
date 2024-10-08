const fs = require("fs")

const rs = fs.createReadStream("./files/writeFiles.txt", { encoding: "utf8" })

const ws = fs.createWriteStream("./files/new-loren.txt")

// rs.on("data", (dataChuck) => {
//     ws.write(dataChuck)
// })

// More efficient way
rs.pipe(ws)