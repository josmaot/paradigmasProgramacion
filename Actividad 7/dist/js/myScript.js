const suma = () => {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    document.getElementById("Resultado").innerHTML = a+b;
}
const resta = () => {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    document.getElementById("Resultado").innerHTML = a-b;
}
const multiplicacion = () => {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    document.getElementById("Resultado").innerHTML = a*b;
}
const division = () => {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    document.getElementById("Resultado").innerHTML = a/b;
}