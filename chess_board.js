// function getheading(){
//     var tag=document.getElementsByTagName("input")[0].value;
//     var data=document.getElementsByTagName("input")[1].value;
// let newElement=document.createElement(tag);
// newElement.innerText=data;
// newElement.setAttribute("class","lulu");
// let parent=document.getElementsByTagName("body")[0];
// parent.appendChild(newElement);
// console.log(newElement);

// }

// function board(){
//     let newElement=document.createElement("table");
//     console.log(newElement);
// }

function board() {
    var rows = document.getElementById("rows")[0].value;
    var cols = document.getElementById("cols")[0].value;

    let table = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            let td = document.createElement("td");

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    var container = document.getElementById("container"); 
    container.appendChild(table);
    console.log(table);
}
