var assert = require("assert");
var crashOverride = require("../katas/crashOverride");

describe("crashOverride", () => {
  it("should not accept numbers as first char", () => {
    assert.equal(
      crashOverride("6mike", "9jones"),
      "Your name must start with a letter from A - Z."
    );
  });

  it("should form an alias", () => {
    assert.equal(crashOverride("Mike", "Rulligan"), "Malware RAD");
  });

  it("should capitalize", () => {
    assert.equal(crashOverride("jules", "edgar"), "Java Energy");
  });
});
