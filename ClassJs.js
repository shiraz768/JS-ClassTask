class books {
    constructor(name, author, price, edition) {
        this.b_name = name;
        this.b_author = author;
        this.b_price = price
        this.b_edition = edition
    }
    details() {
        var details = document.getElementById("details")
        return details.innerHTML +=
         `<tr><td>${this.b_name}</td><td>${this.b_author}</td><td>${this.b_price}</td><td>${this.b_edition}</td></tr>`
    }
}
let b1 = new books("Body Aware", "Erica Hornthal", 17.33+"$", "1st Edition");
b1.details()
let b2 = new books("Reclaiming Calliope", "Fides Krucker", 19.95+"$", "1st Edition");
b2.details()
let b3 = new books("Radical Healing", "Laura May Northrup", 17.95+"$", "1st Edition");
b3.details()
let b4 = new books("Pragmatics", "George Yule", 14.88+"$", "2nd Edition");
b4.details()
let b5 = new books("Surrounded By Idiots", "Thomas Erikson", 20.33+"$", "1st Edition");
b5.details()