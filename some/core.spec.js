var core = require("./core");

describe("core", function() {
  it("#anyGreaterThan10", function() {
    var goodInput = [8, 9, 10, 11];
    expect(core.anyGreaterThan10(goodInput)).toEqual(true);

    var badInput = [1, 2, 3, 4];
    expect(core.anyGreaterThan10(badInput)).toEqual(false);
  });

  it("#longWord", function() {
    var goodInput = ["abc", "12345678901"];
    expect(core.longWord(goodInput)).toEqual(true);

    var badInput = ["abc", "def"];
    expect(core.longWord(badInput)).toEqual(false);
  });

  it("#truePossibilities", function() {
    var goodInput = [
      [false, false, false],
      [false, false, false],
      [false, false, true]
    ];
    expect(core.truePossibilities(goodInput)).toEqual(true);

    var badInput = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ];
    expect(core.truePossibilities(badInput)).toEqual(false);
  });

  it("#lostCarcosa", function() {
    var goodInput = [
      "Strange is the night where black stars rise,",
      "And strange moons circle through the skies,",
      "But stranger still is",
      "Lost Carcosa."
    ];
    expect(core.lostCarcosa(goodInput)).toEqual(true);

    var badInput = [
      "Along the shore the cloud waves break,",
      "The twin suns sink behind the lake,",
      "The shadows lengthen",
      "In Carcosa."
    ];
    expect(core.lostCarcosa(badInput)).toEqual(false);
  });
});
