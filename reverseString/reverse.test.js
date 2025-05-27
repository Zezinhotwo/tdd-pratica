import { reverseString } from "./reverse";

test("reverse String 'bombom'", () => {
    expect(reverseString("bombom")).toBe("mobmob");
});

test("reverse String 'craca troa'", () => {
    expect(reverseString("craca toa")).toBe("aot acarc")
});

test("reverse String 'kaio", () => {
    expect(reverseString("kaio")).toBe("oiak")
});
