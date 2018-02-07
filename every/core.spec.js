var core = require("./core");

describe("core", function() {
  it("#allEven", function() {
    var goodInput = [2, 4, 10];
    expect(core.allEven(goodInput)).toEqual(true);

    var badInput = [2, 4, 11];
    expect(core.allEven(badInput)).toEqual(false);
  });

  it("#positiveMatrix", function() {
    var goodInput = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    expect(core.positiveMatrix(goodInput)).toEqual(true);

    var badInput = [[-1, 2, 3], [4, -5, 6], [7, 8, -9]];
    expect(core.positiveMatrix(badInput)).toEqual(false);
  });
});
