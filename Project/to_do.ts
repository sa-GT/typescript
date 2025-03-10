
interface Task{
    id?: number
    title: string
    states: string
    startDate: string
    endDate: string
}
function addnew() {
 
    var counter = 1;
    const titlee = (document.getElementById("Title") as HTMLInputElement).value;
    const statess = (document.getElementById("state") as HTMLInputElement).value;
    const startDatee = (document.getElementById("startDate") as HTMLInputElement).value;
    const endDatee = (document.getElementById("endDate") as HTMLInputElement).value;
    const existingData = localStorage.getItem("arrayyyssss");
    const arrays: Task[] =JSON.parse(existingData||"[]");
    // console.log(arrays.indexOf(arrays[(arrays.length-1)])+2 );
    
    const newTask: Task = {
        id: arrays.indexOf(arrays[(arrays.length-1)])+2 ,
        title: titlee,
        states: statess,
        startDate: startDatee,
        endDate: endDatee
    };
    arrays.push(newTask);
    localStorage.setItem("arrayyyssss", JSON.stringify(arrays));
}

function show_data() {
    var bodyy :any = document.getElementById("tbodyy");
    const arrayss = JSON.parse(localStorage.getItem("arrayyyssss") || "[]");
    if(bodyy){
        arrayss.forEach(element => {   
            bodyy.innerHTML+=`
                <tr>
                    <td>${element.title}</td>
                    <td>${element.states}</td>
                    <td>${element.startDate}</td>
                    <td>${element.endDate}</td>
                </tr>
            `
        });
    }
}

show_data();



