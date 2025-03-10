function addnew() {
    var counter = 1;
    var titlee = document.getElementById("Title").value;
    var statess = document.getElementById("state").value;
    var startDatee = document.getElementById("startDate").value;
    var endDatee = document.getElementById("endDate").value;
    var existingData = localStorage.getItem("arrayyyssss");
    var arrays = JSON.parse(existingData || "[]");
    console.log(arrays.indexOf(arrays[(arrays.length - 1)]) + 2);
    var newTask = {
        id: arrays.indexOf(arrays[(arrays.length - 1)]) + 2,
        title: titlee,
        states: statess,
        startDate: startDatee,
        endDate: endDatee
    };
    arrays.push(newTask);
    localStorage.setItem("arrayyyssss", JSON.stringify(arrays));
}
function show_data() {
    var bodyy = document.getElementById("tbodyy");
    var arrayss = JSON.parse(localStorage.getItem("arrayyyssss") || "[]");
    if (bodyy) {
        arrayss.forEach(function (element) {
            bodyy.innerHTML += "\n                <tr>\n                    <td>".concat(element.title, "</td>\n                    <td>").concat(element.states, "</td>\n                    <td>").concat(element.startDate, "</td>\n                    <td>").concat(element.endDate, "</td>\n                </tr>\n            ");
        });
    }
}
show_data();
