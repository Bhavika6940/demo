import sum from "./sum.js";



describe("test for sum eg", () => {
    
    test("adds 5 + 3 to equal 8", () => {
    expect(sum(5,3)).toBe(8);
     });

    test("adds 2 + 2 to equal 4", () => {
    expect(sum(2,2)).toBe(4);
     });

})
