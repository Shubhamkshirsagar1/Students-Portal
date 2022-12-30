// Imported JSON 
import data from "./data.json" assert {type: 'json'};
// console.log(data);


// Selected things for accessing 
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");

let sortAZ = document.getElementById("sortAZ");
let sortZA = document.getElementById("sortZA");
let sortByMarks = document.getElementById("sortByMarks");
let sortByPassing = document.getElementById("sortByPassing");
let sortByClass = document.getElementById("sortByClass");
let sortByGender = document.getElementById("sortByGender");
let femaleTableContainer = document.getElementById("femaleTableContainer");
let maleTableContainer = document.getElementById("maleTableContainer");



// Used map function to map our whole array objects data inside a table body. forEach also would have worked insead of map as we are working on reference.
function mapData(data) {
    tableBody.innerHTML = "";

    data.map((item) => {
        let tableItem = document.createElement("tr");
        tableItem.innerHTML =
        `
            <td>${item.id}</td>
            <td><img src="${item.img_src}"/> ${item.first_name} ${item.last_name}</td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "passed" : "failed"}</td>
            <td>${item.email}</td>
        `
        tableBody.append(tableItem);
    });
    // console.log(data);
}
mapData(data);



// Search first name , last name and email via this function.
window.searchTablea = function searchTablea() {
    let search = searchInput.value;
    let matchedData = data.filter((item)=>{
        return item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase())
    });
    mapData(matchedData);
}



// Sorted them in ascending order
window.sortAZa = function sortAZa() {
    let ascendingData = data.sort((a, b) => {
        if ((a.first_name < b.first_name)) {
            return -1;
        }
        else if ((a.first_name > b.first_name)) {
            return 1;
        }
        else{
            return a.last_name.localeCompare(b.last_name);
        }
    })
    mapData(ascendingData);
}



// Sorted them in descending order
window.sortZAa = function sortZAa() {
    let decreasingData = data.sort((a, b) => {
        if ((a.first_name > b.first_name)) {
            return -1;
        }
        else if ((a.first_name < b.first_name)) {
            return 1;
        }
        else{
            return b.last_name.localeCompare(a.last_name);
        }
    })
    mapData(decreasingData);
}



// Sorted marks in ascending order
window.sortMarksa = function sortMarksa() {
    let increasingMarks = data.sort((a, b) => {
        if (a.marks < b.marks) {
            return -1;
        }
        // if (a.marks > b.marks) {
        //     return 1;
        // }
        // return 0;
    })
    mapData(increasingMarks);
}



// Sorted function for only those who have passed.
window.sortPassinga = function sortPassinga() {
    let passedStudent = data.filter((item)=>{
        return item.passing; //passing == true
    })
    mapData(passedStudent);
}



// Sorted function in ascending order as per the class like 1,2,3,4......!
window.sortClassa = function sortClassa() {
    let classSort = data.sort((a, b) => {
        if ((a.class < b.class)) {
            return -1;
        }
        // if ((a.class < b.class)) {
        //     return 1;
        // }
        // return 0;
    })
    mapData(classSort);
}



window.sortGendera = function sortGendera(){
    let maleSort = data.filter((item)=>{
        return item.gender === "Male"
    })
    mapData(maleSort);
    
    let femaleSort = data.filter((item)=>{
        return item.gender === "Female"
    })
    mapData(femaleSort);
}