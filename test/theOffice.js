var assert = require("assert");
var theOffice = require("../katas/theOffice");

const meet = { 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }
const boss = ["laura"];

const meet1 = { 'tim': 1, 'jim': 3, 'randy': 9, 'sandy': 6, 'andy': 7, 'katie': 6, 'laura': 9, 'saajid': 9, 'alex': 9, 'john': 9, 'mr': 8 }
const boss1 = ['katie']

const meet2 = { 'tim': 2, 'jim': 4, 'randy': 0, 'sandy': 5, 'andy': 8, 'katie': 6, 'laura': 2, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 8 }
const boss2 = ['john']

describe("theOffice", () => {
  it("should return Get Out Now!", () => {
    assert.equal(theOffice((meet), (boss)), 'Get Out Now!');
  });
  it("should return Nice Work Champ!", () => {
    assert.equal(theOffice((meet1), (boss1)), 'Nice Work Champ!');
  });
  it("should return Get Out Now!", () => {
    assert.equal(theOffice((meet2), (boss2)), 'Get Out Now!');
  });
});
