var users = [];
function signUp() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  if (!isLong(password.value)) {
    var wantsStrong = confirm(
      "The password is too short. Would you like to generate a strong password?"
    );
    if (wantsStrong) {
      generatePassword();
    }
  } else if (!hasLower(password.value)) {
    var wantsStrong = confirm(
      "The password doesn't have any lowercase letters. Would you like to generate a strong password?"
    );
    if (wantsStrong) {
      generatePassword();
    }
  } else if (!hasUpper(password.value)) {
    var wantsStrong = confirm(
      "The password doesn't have any uppercase letters. Would you like to generate a strong password?"
    );
    if (wantsStrong) {
      generatePassword();
    }
  } else if (!hasNumbers(password.value)) {
    var wantsStrong = confirm(
      "The password doesn't have any numbers. Would you like to generate a strong password?"
    );
    if (wantsStrong) {
      generatePassword();
    }
  } else if (!hasSymbols(password.value)) {
    var wantsStrong = confirm(
      "The password doesn't have any symbols. Would you like to generate a strong password?"
    );
    if (wantsStrong) {
      generatePassword();
    }
  } else {
    var userHint = prompt(
      "Login Info Saved. What would be the hint for the password? "
    );
    var user = [username.value, password.value, userHint];
    users.push(user);
  }
}

function logIn() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  for (var i = 0; i < users.length - 1; i++);
  {
    var user = users[i];

    if (username.value == user[0] && password.value == user[1]) {
      alert("Successful Login!");
      window.location.href = "diary.html";
    } else if (username.value == user[0]) {
      var wantsHint = confirm("Wrong Passowrd. Would you like a hint?");
      if (wantsHint) alert(user[2]);
    } else {
      alert("Username not recognized");
    }
  }
}
function colourChange() {
  var colours = [
    "#FFE1E1",
    "#CDFCF6",
    "#F9F9F9",
    "#F675A8",
    "#D3CEDF",
    "#CDF0EA",
    "#F6C6EA",
    "#F3C5C5",
    "#A267AC",
    "#CDF2CA",
  ];
  var num = Math.floor(Math.random() * 10);
  document.getElementById("content").style.backgroundColor = colours[num];
}
function generatePassword() {
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "x",
    "y",
    "z",
  ];
  var uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "X",
    "Y",
    "Z",
  ];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
    "=",
  ];
  var password = "";
  for (var i = 0; i <= 2; i++) {
    var randomUppercase =
      uppercase[Math.floor(Math.random() * uppercase.length)];
    var randomLowercase =
      lowerCase[Math.floor(Math.random() * lowerCase.length)];
    var randomnumber = numbers[Math.floor(Math.random() * numbers.length)];
    var randomUsymbol = symbols[Math.floor(Math.random() * symbols.length)];
    password =
      password +
      randomUppercase +
      randomLowercase +
      randomUsymbol +
      randomnumber;
  }
  alert(password);
}

function isLong(string) {
  if (string.length >= 8) return true;
  else {
    return false;
  }
}

function hasSymbols(string) {
  var returnValue = false;
  var symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
    "=",
  ];
  for (var i = 0; i < string.length; i++) {
    for (j = 0; j < symbols.length; j++) {
      if (string[i] == symbols[j]) returnValue = true;
    }
  }
  return returnValue;
}

function hasUpper(string) {
  var returnValue = false;
  var uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "X",
    "Y",
    "Z",
  ];
  for (var i = 0; i < string.length; i++) {
    for (j = 0; j < uppercase.length; j++) {
      if (string[i] == uppercase[j]) returnValue = true;
    }
  }
  return returnValue;
}

function hasLower(string) {
  var returnValue = false;
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "x",
    "y",
    "z",
  ];
  for (var i = 0; i < string.length; i++) {
    for (j = 0; j < lowerCase.length; j++) {
      if (string[i] == lowerCase[j]) returnValue = true;
    }
  }
  return returnValue;
}

function hasNumbers(string) {
  var returnValue = false;
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var i = 0; i < string.length; i++) {
    for (j = 0; j < numbers.length; j++) {
      if (string[i] == numbers[j]) returnValue = true;
    }
  }
  return returnValue;
}
