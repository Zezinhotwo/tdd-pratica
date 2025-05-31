import { analyzeArray } from "./analyzeArray";
test("1,8,3,4,2,6", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]))
        .toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        })
})
test("1,2,3,4,5,6", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 2, 4]))
        .toEqual({
            average: 3,
            min: 1,
            max: 6,
            length: 8
        })
})