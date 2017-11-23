const fs = require('fs-extra')
const path = require('path')

const filterByExtension = (files, extensions) => (
    files.filter(file => extensions.test(file))
)

const formatFile = filepath => {
    const { name, ext } = path.parse(filepath)
    const { size } = fs.statSync(filepath)

    return { name, ext, size, path: filepath }
}

const scan = async (directory, extensions) => {
    const files = await fs.readdir(directory)
    return filterByExtension(files, extensions).map(filename => formatFile(
        path.join(directory, filename)
    ))
}

module.exports = scan
