import caesarCipher from "./caesarCipher";

test("cifra kaio => Ndlr ", () => {
    expect(caesarCipher("Kaio", 3)).toBe("Ndlr");
})

test("cifra Hello World!=> Khoor, Zruog! ", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})