// let a: string;
// let b: number;
// let c: boolean;

// let d: any;

// a = "Hello world";
// b = 22;
// c = true;

// // d = "You rock my world";
// d = 31;

// console.log(a, b, c, d);

// console.log("Whats up");

// let lang: string[];
// let langs: Array<string> = ["kurtce", "turkce", "english"];

// let numbers: number[];
// // let boolValues: boolean[]; veya assagidaki gibide yapabiliriz

// let boolValues: Array<boolean>;

// lang = ["Php", "Java", "C++", "Python"];
// numbers = [1, 2, 3, 45, 5, 6, 6, 66, 134];
// boolValues = [true, false, true];

// console.log(lang);
// console.log(...lang);
// console.log(...numbers);
// console.log(boolValues);
// console.log(langs);

// function addNumber(num1: number, num2: number) {
//   console.log(num1 + num2);
// }
// addNumber("12", 15);
// function addNumber(num1: number, num2?: number): number {
//   if (typeof num2 === "undefined") {
//     return num1;
//   } else {
//     return num1 + num2;
//   }
// }
// function addNumber(num1: number, num2: number = 100): number { // number return olcak
//   if (typeof num2 === "undefined") {
//     return num1;
//   } else {
//     return num1 + num2;
//   }
// }

// console.log(addNumber(12));
// :void =>returnle herhangi bir deger donemeyiz sadece tek bir return  donebiliriz oda fonksiyonu daha onceden sonlandirmadan.

// function addNumbers(num1: number, num2: number): void {
//   return;
//   console.log(num1 + num2);

//   // return num1 + num2;
// }

// addNumbers(10, 20);

// class Person {
//   //private name: string;
//   name: string;
//   age: number;
//   phone: string;

//   constructor(name: string, age: number, phone: string) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;

//     console.log("Kisi olusturuldu");
//   }
//   showInfows() {
//     console.log(`isim ${this.name} Yas: ${this.age} Phone: ${this.phone}`);
//   }
// }

// class Employee extends Person {
//   salary: number;
//   constructor(name: string, age: number, phone: string, salary: number) {
//     super(name, age, phone);
//     this.salary = salary;
//   }
//   changeDepartman() {
//     console.log("Departman  is changing");
//   }
//   showInfows() {
//     super.showInfows();
//     console.log("Salary is"+this.salary)
//   }
// }

// let person1 = new Person("Veysel Guven", 33, "12345y6");
// person1.showInfows();

//person1.name; //Property 'name' is private and only accessible within class 'Person'.

// let employee1 = new Employee("Veysel Guven", 33, "12345y6", 45000);

// employee1.showInfows();
// employee1.changeDepartman();

// interface IDatabase {
//   add();
//   get();
//   delete();
//   update();
// }

// class MySql implements IDatabase {
//   add() {
//     console.log("Mysql add");
//   }
//   get() {
//     console.log("Mysql get");
//   }
//   delete() {
//     console.log("Mysql delete");
//   }
//   update() {
//     console.log("Mysql update");
//   }
// }
// class MongoDB implements IDatabase {
//   add() {
//     console.log("MongoDB add");
//   }
//   get() {
//     console.log("MongoDB get");
//   }
//   delete() {
//     console.log("MongoDB delete");
//   }
//   update() {
//     console.log("MongoDB update");
//   }
// }

// function addDataBase(database: IDatabase) {
//   database.add();
// }

// addDataBase(new MySql());
// addDataBase(new MongoDB());

// let mysql = new MySql();

// mysql.add();

// bazi metodalarimiz ortaksa bunu burda depolayabliriz yani sadece burda yazabiliriz
// burdan kalitim yapan herkes buna sahip olur
abstract class Database {
  get() {
    console.log("Database Get");
  }
  add() {
    console.log("Database Add");
  }

  abstract delete(); // soyut yani govdesiz metod oldugunu bildirmek lazim
  abstract update();
}

class MySql extends Database {
  delete() {
    console.log("Mysql delete");
  }
  update() {
    console.log("Mysql update");
  }
}

class MongoDB extends Database {
  delete() {
    console.log("MongoDB delete");
  }
  update() {
    console.log("MongoDB update");
  }
}

function addDataBase(database: Database) {
  database.delete();
  database.update();
}

addDataBase(new MongoDB());
addDataBase(new MySql());
