import { capitalize } from "./capitalize"

test("capitalize 'kaua' ", () => {
    expect(capitalize("kaua")).toEqual("Kaua");
});

test("capitalize 'ana' ", () => {
    expect(capitalize("ana")).toEqual("Ana");
});

test("capitalize 'kaio' ", () => {
    expect(capitalize("kaio")).toEqual("Kaio")
});


