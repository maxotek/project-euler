describe("Algorithms", function() {
    it("Problem 1", function() {
      var algo = require("../../src/algo/problem1");
      var result = algo();

      expect(result).toBe(233168);
    });

    it("Problem 2", function() {
      var algo = require("../../src/algo/problem2");
      var result = algo();

      expect(result).toBe(4613732);
    });
  });