const handlers = {}

const handle = file => handlers[file.ext](file) || file

module.exports = handle
