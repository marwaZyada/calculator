let btn = document.querySelectorAll(".operation");
let operation = document.getElementById('in-val');
let result = document.getElementById("result");
let del = document.getElementById("del");
let clr = document.getElementById("clr");


btn.forEach((el) => {
    el.addEventListener('click', (att) => {
        operation.value += att.target.value;

    })
})


let calculate = () => eval(operation.value);
result.addEventListener("click", () => {
    if (operation.value !== " ") {

        try { operation.value = calculate() } catch (error) { operation.value = "error" }
    } else { operation.value = "please enter numbers"; }
});
clr.addEventListener("click", () => operation.value = " ")
del.addEventListener("click", () => {
    (operation.value === "error" || operation.value === "please enter numbers") ? operation.value = " ": operation.value = operation.value.slice(0, -1);
});