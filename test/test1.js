//test cases 1012ab22f
assert = chai.assert;

// describe() is a function by which you can define a collection of tests.
// It takes two parameters, the 1st one is a description of what is being tested, and
// the 2nd one is a function which contains one or multiple tests each defined by one it().
describe("Testing function generatePassword()", function () {
  password = generatePassword();

  // it() is a function by which you should define one single test.
  // It takes two parameters, the 1st one is a description of what is being tested, and
  // the 2nd one is a function which normally contains one assert.
  it("Test 1: generatePassword() returns something", function () {
    // assert is the core component of automated testing, by which we can verify wether
    // some condition is true or false. true represents the test has passed, and false
    // represents a failure. See https://www.chaijs.com/api/assert/
    assert.exists(password, "the return value is not null or undefined");
  });

  it("Test 2: the returned value is from type string", function () {
    assert.typeOf(password, "string");
  });

  it("Test 3: the length of the returned value is greater or equal to 8", function () {
    for (var i = 1; i < 3000; i++) {
      var password = generatePassword();
      assert(password.length >= 8);
    }
  });

  it("Test 4: the returned value has Uppercase Letters", function () {
    for (var i = 1; i < 3000; i++) {
      var password = generatePassword();
      assert(hasUpper(password));
    }
  });

  it("Test 5: the returned value has Lowercase Letters", function () {
    for (var i = 1; i < 3000; i++) {
      var password = generatePassword();
      assert(hasLower(password));
    }
  });

  it("Test 6: the returned value has at least 1 number", function () {
    for (var i = 1; i < 3000; i++) {
      var password = generatePassword();
      assert(hasNumbers(password));
    }
  });

  it("Test 7: the returned value has at least 1 symbol", function () {
    for (var i = 1; i < 3000; i++) {
      var password = generatePassword();
      assert(hasSymbols(password));
    }
  });
});
