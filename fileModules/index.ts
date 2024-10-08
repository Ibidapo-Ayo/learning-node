const fsPromises = require("fs").promises
const path = require("path")


// Control Flow

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, "files", "hello.txt"), "utf8")
        console.log(data);

        const appendedFile = await fsPromises.appendFile(path.join(__dirname, "files", "writeFiles.txt"), "\n\n AppendedFile")

        console.log("Append file end");


    } catch (error) {
        console.log(error);

    }
}


fileOps()



// fs.readFile(path.join(__dirname, "files", "hello.txt"), (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());

// })


// // Write file is used to create a new file and append content to it 
// fs.writeFile(path.join(__dirname, "files", "writeFiles.txt"), "It is great to write file", (err) => {
//     if (err) throw err;
//     console.log("Done writing file...");

// })

// fs.appendFile(path.join(__dirname, "files", "writeFiles.txt"), "\n\n How is it going in node js", (err) => {
//     if (err) throw err;
//     console.log("Append complete...");

// })

// console.log("This is sychronous...");


process.on("uncaughtException", err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})