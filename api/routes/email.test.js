const email = require("./email")
// @ponicode
describe("email.isEmailValid", () => {
    test("0", () => {
        let result = email.isEmailValid("user.ponicode.com")
        expect(result).toBe(false)
    })

    test("1", () => {
        let result = email.isEmailValid("user@ponicode")
        expect(result).toBe(false)
    })

    test("2", () => {
        let result = email.isEmailValid("1user@ponicode.com")
        expect(result).toBe(true)
    })

    test("3", () => {
        let result = email.isEmailValid("schneier@tutanota.com")
        expect(result).toBe(true)
    })
})
