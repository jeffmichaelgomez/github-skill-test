const app = require('./app')

test('return string', () => {
    expect( app() ).toBe('Hello World')
})