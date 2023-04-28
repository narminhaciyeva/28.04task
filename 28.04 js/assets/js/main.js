const inp = document.querySelector("input");
const ls = document.getElementById("list");
let students = [];
function addArr() {
    if (inp.value.trim() != "") {


        if (students.includes(inp.value.trim()) === false) {
            students.push(inp.value.trim());
            console.log(inp.value);
            inp.value = "";
            fillList();

        }
        else {
            alert("Bu adda istifadeci var")
        }

    }
    else {
        alert("Nese daxil edin")
    }

}


function fillList() {
    let res = students.reduce(
        (result, val) => result += `<span>${val}</span>`, ''
    );
    ls.innerHTML = res;
}