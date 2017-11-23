const composeHandlers = (...handlers) => file => (
    handlers.reduce((prev, curr) => (
        prev.then(
            file => curr(file),
            err => console.log(err)
        )
    ), Promise.resolve(file))
)

const handle = composeHandlers(
    /* Put handlers here */
)

module.exports = handle
