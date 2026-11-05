const { getMessage, addNumbers } = require("../src/app");

describe("DevOps CI Application Tests", () => {

    test("Should return the correct message", () => {
        expect(getMessage()).toBe(
            "Jenkins CI Pipeline is Working!"
        );
    });

    test("Should add two numbers correctly", () => {
        expect(addNumbers(10, 20)).toBe(30);
    });

});