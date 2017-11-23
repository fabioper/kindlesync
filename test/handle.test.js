const { expect } = require('chai')
const handle = require('../api/handle')

describe('handle()', () => {
    it('should return a mobi file', done => {
        const file = {
            name: 'logic-language-models-computer-science-3rd',
            ext: '.epub',
            size: 11000,
            path: './dir-test'
        }

        handle(file)
            .then(result => {
                expect(result.ext).to.be.equals('.mobi')
                done()
            })
            .catch(err => done(err))
    })
})
