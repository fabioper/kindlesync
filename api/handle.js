const composeHandlers = (...handlers) => {
    const handlersLength = handlers.length

    return (file, afterEach) => (
        handlers.reduce((prevHandler, currHandler) => (
            prevHandler
                .then(file => {
                    afterEach && afterEach(null, file, handlersLength)
                    return currHandler(file)
                })
                .catch(err => {
                    afterEach && afterEach(err, file, handlersLength)
                    return currHandler(file)
                })
        ), Promise.resolve(file))
    )
}

const handle = composeHandlers(/* Put handlers here */)

module.exports = handle
