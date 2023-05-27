class Employee {
    constructor(name, age, id) {
        this.e_name = name;
        this.e_age = age;
        this.e_id = id;
    }
}
class department extends Employee {
    constructor(name, age, id, depart) {
        super(name, age, id);
        this.e_depart = depart

    }
    details() {
        return document.getElementById("details").innerHTML += `<tr><td>${this.e_name}</td><td>${this.e_age}</td><td>${this.e_id}</td><td>${this.e_depart}</td></tr>`
    }
}
let e1 = new department("Riaz Ahmed", 25,234, "Student Affair");
e1.details()
let e2 = new department("Hamza Anwar", 23, 235, "Web Dev");
e2.details()
let e3 = new department("Murtaza Wahab", 24, 276, "Office Management");
e3.details()
let e4 = new department("Imran Riaz", 25, 345, "Faculty");
e4.details()
let e5 = new department("Imran Sheikh", 28, 764, "Admin Office");
e5.details()