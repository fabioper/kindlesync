const handlers = {
    '.pdf': async file => {
        console.log(`${file.name} is a pdf file`)
        return file
    },
    '.mobi': async file => {
        console.log(`${file.name} is a mobi file`)
        return file
    },
    '.epub': async file => {
        console.log(`${file.name} is a epub file`)
        return file
    }
}

const handle = file => handlers[file.ext](file)

module.exports = handle
