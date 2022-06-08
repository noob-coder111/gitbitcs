var fieldSorter = function (fields) {
  return function (a, b) {
    return fields
      .map(function (o) {
        var dir = 1;
        if (o[0] === "") {
          dir = -1;
          o = o.substring(1);
        }
        return a[o] > b[o] ? dir : a[o] < b[o] ? -dir : 0;
      })
      .reduce(function (p, n) {
        return p ? p : n;
      }, 0);
  };
};
var fieldSorterdesc = function (fields) {
  return function (a, b) {
    return fields
      .map(function (o) {
        var dir = 1;
        if (o[0] === "") {
          dir = -1;
          o = o.substring(1);
        }
        return a[o] < b[o] ? dir : a[o] > b[o] ? -dir : 0;
      })
      .reduce(function (p, n) {
        return p ? p : n;
      }, 0);
  };
};
var Person = /** @class */ (function () {
  function Person(name, age, salary, sex) {
    this.n = name;
    this.a = age;
    this.s = salary;
    this.sx = sex;
  }
  Person.sortarr = function (arr, fieldname, type) {
    if (type === "desc") {
      var sortedHomesdesc = arr.sort(fieldSorterdesc(["".concat(fieldname)]));
      console.log(JSON.stringify(sortedHomesdesc, null, "\t"));
    } else {
      var sortedHomes = arr.sort(fieldSorter(["".concat(fieldname)]));
      console.log(JSON.stringify(sortedHomes, null, "\t"));
    }
  };
  return Person;
})();
var Deepak = new Person("Deepak", "21", "10000", "male");
var Atul = new Person("Atul", "22", "15000", "female");
var Abhishek = new Person("Abhishek", "20", "11000", "male");
var Mayank = new Person("Mayank", "23", "12000", "female");
var arr = [Deepak, Atul, Abhishek, Mayank];
Person.sortarr(arr, "sx", "asc");
