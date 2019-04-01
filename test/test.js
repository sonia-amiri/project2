let assert = require('chai').assert;

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}



function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}





describe("inArray", function() {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  it("returns the filter for values in array", function() {

    let filter = inArray([1,2,10]);
    assert.isTrue(filter(2));
    assert.isFalse(filter(0));
  });
});


describe("inBetween", function() {

  it("returns the filter for values between", function() {
    let filter = inBetween(3, 6);
    assert.isTrue(filter(5));
    assert.isFalse(filter(0));
  });
});


