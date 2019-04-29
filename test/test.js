let assert = require('chai').assert;




function factorial(n){
    if (n==1) {
      return 1;
    } else {
      return n*factorial(n-1);
    }
  }


  
describe("factorial",function(){
    it('calculate n! using recursion',function(){
        assert.equal(factorial(5),120);
    });
});