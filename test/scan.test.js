const { expect } = require('chai')
const mock = require('mock-fs')
const scan = require('../api/scan')

const folder = './dir-test'

mock({
    [folder]: {
        'bertoli-m-react-design-patterns-and-best-practices.mobi': '',
        'building-evolutionary-architectures.rar': '',
        'identity-data-security-web-development.pdf': '',
        'identity-data-security-web-development.epub': '',
        'logic-language-models-computer-science.epub': '',
        'list-of-competition-analysis-tools.html': '',
        'dark-space-stars.jpg': '',
        'introduction-to-competition-analysis.mp4': ''
    }
})

describe('scan()', () => {
    it('should return a list of documents of the given extensions', done => {
        const extensions = /\.(mobi|epub|pdf|rar|zip|html)$/

        scan(folder, extensions)
            .then(documents => {
                expect(documents).to.have.lengthOf(6)

                documents.forEach(doc => {
                    expect(doc).to.have.keys(
                        ['name', 'ext', 'path', 'size']
                    )
                })

                done()
            })
            .catch(err => done(err))
    })
})
