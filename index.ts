const fieldSorter = (fields:string[]) => (a:string, b:string) =>
  fields
    .map((o) => {
      let dir = 1;
      if (o[0] === "") {
        dir = -1;
        o = o.substring(1);
      }
      return a[o] > b[o] ? dir : a[o] < b[o] ? -dir : 0;
    })
    .reduce((p:number, n:number) => (p ? p : n), 0);

const fieldSorterdesc = (fields:string[]) => (a:string, b:string) =>
  fields
    .map((o) => {
      let dir = 1;
      if (o[0] === "") {
        dir = -1;
        o = o.substring(1);
      }
      return a[o] < b[o] ? dir : a[o] > b[o] ? -dir : 0;
    })
    .reduce((p:number, n:number) => (p ? p : n), 0);

class Person {
    n:string
    a:string
    s:string
    sx:string
  constructor(name:string, age:string, salary:string, sex:string) {
    this.n = name;
    this.a = age;
    this.s = salary;
    this.sx = sex;
  }
  static sortarr(arr:any[], fieldname:string, type:string) {
    if (type === "desc") {
      const sortedHomesdesc = arr.sort(fieldSorterdesc([`${fieldname}`]));
      console.log(JSON.stringify(sortedHomesdesc, null, "\t"));
    } else {
      const sortedHomes = arr.sort(fieldSorter([`${fieldname}`]));
      console.log(JSON.stringify(sortedHomes, null, "\t"));
    }
  }
}

const Deepak = new Person("Deepak", "21", "10000", "male");
const Atul = new Person("Atul", "22", "15000", "female");
const Abhishek = new Person("Abhishek", "20", "11000", "male");
const Mayank = new Person("Mayank", "23", "12000", "female");
const arr = [Deepak, Atul, Abhishek, Mayank];

Person.sortarr(arr, "n", "asc");
