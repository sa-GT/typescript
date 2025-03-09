var data = [
    { name: "Hashem", age: 10 },
    { name: "assad", age: 50 }
];
function adult() {
    var s1 = document.getElementById("ss");
    if (s1) {
        // s1.innerHTML=""
        data.forEach(function (m) {
            if (m.age > 18) {
                s1.innerHTML += "<p>Name is :".concat(m.name, "</p><p> and is : Adult</p>");
            }
            else {
                s1.innerHTML += "<p> Name is ".concat(m.name, "</p><p> And is :Minor</p>");
            }
        });
    }
}
var Teachers_data = [
    { name: "Hassan", subject: "Math" },
    { name: "abeear", subject: "Geo" },
];
function Iteratee() {
    var so = document.getElementById("ss");
    Teachers_data.forEach(function (m) {
        if (so) {
            so.innerHTML += "<p>".concat(m.subject, "</p>");
        }
    });
}
var set = [
    { name: "p1", price: 20, quantity: 5 },
    { name: "p2", price: 30, quantity: 4 },
    { name: "p3", price: 80, quantity: 5 }
];
function quantityy() {
    var quant = document.getElementById("ss");
    if (quant) {
        set.forEach(function (m) {
            if (m.quantity == 5) {
                quant.innerHTML += "after added : <p>".concat(m.price * (15 / 100), "</p>");
            }
            else {
                quant.innerHTML += "<p>".concat(m.price, "</p>");
            }
        });
    }
}
function emptyy() {
    var quant = document.getElementById("ss");
    quant.innerHTML = "";
}
// Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) for product and when you submit the form it will save the product inside array in the local storage and then display all the products as a cards under the form.
function locall() {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var price = document.getElementById("price").value;
    var quantity = document.getElementById("quantityss").value;
    var container = document.getElementById("forform");
    var array = [name, description, price, quantity];
    localStorage.setItem("name", name);
    localStorage.setItem("des", description);
    localStorage.setItem("price", price);
    localStorage.setItem("quant", quantity);
    localStorage.setItem("arrayy", JSON.stringify(array));
    var getname = localStorage.getItem("name");
    var getdes = localStorage.getItem("des");
    var getprice = localStorage.getItem("price");
    var getquant = localStorage.getItem("quant");
    var getarray = JSON.parse(localStorage.getItem("arrayy") || "[]");
    for (var _i = 0, getarray_1 = getarray; _i < getarray_1.length; _i++) {
        var element = getarray_1[_i];
        if (container) {
            container.innerHTML += "".concat(element, "<br>");
        }
    }
}
