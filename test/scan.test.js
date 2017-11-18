const { expect } = require('chai')
const mock = require('mock-fs')
const scan = require('../api/scan')

const folder = './dir-test'

mock({
    [folder]: {
        'Bertoli M. - React Design Patterns and Best Practices - 2017.mobi': '',
        'building-evolutionary-architectures.rar': '',
        'common-sense-guide-data-structures-algorithms.rar': '',
        'identity-data-security-web-development.pdf': '',
        'identity-data-security-web-development.epub': '',
        'logic-language-models-computer-science-3rd.epub': '',
        '018 List of Competition Analysis Tools.html': '',
        'learning-redux.azw3': '',
        'dark-space-1366x768-stars-4k-8k-7935.jpg': '',
        '016 Introduction to Competition Analysis.mp4': '',
        '03-Configuring your development environment.en.srt': ''
    }
})

describe('scan()', () => {
    it('should return a list of documents of the given extensions', done => {
        const extensions = /\.(mobi|epub|pdf|rar|zip|html)$/

        scan(folder, extensions)
            .then(documents => {
                expect(documents).to.have.lengthOf(7)

                documents.forEach(doc => {
                    expect(doc).to.have.keys([
                        'name',
                        'ext',
                        'path',
                        'size'
                    ])
                })

                done()
            })
            .catch(err => done(err))
    })
})
