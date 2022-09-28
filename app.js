function MandarSaludos(){
    console.log("Buen dia");
}

function sumar(){
    const formu= document.getElementById("formulario")
    let numeroA = formu["operadorA"];
    let numeroB = formu["operadorB"];
    let resultado =parseInt(numeroA.value) +parseInt(numeroB.value);
    if(isNaN(resultado)){
        resultado= "La operacion no incluye numeros"    
    }
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

}

function restar(){
    const formu= document.getElementById("formulario")
    let numeroA = formu["operadorA"];
    let numeroB = formu["operadorB"];
    let resultado =parseInt(numeroA.value) -parseInt(numeroB.value);
    if(isNaN(resultado)){
        resultado= "La operacion no incluye numeros"    
    }
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

}

function multiplicar(){
    const formu= document.getElementById("formulario")
    let numeroA = formu["operadorA"];
    let numeroB = formu["operadorB"];
    let resultado =parseInt(numeroA.value) *parseInt(numeroB.value);
    if(isNaN(resultado)){
        resultado= "La operacion no incluye numeros"    
    }
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function dividir(){
    const formu= document.getElementById("formulario")
    let numeroA = formu["operadorA"];
    let numeroB = formu["operadorB"];
    let resultado =parseInt(numeroA.value) /parseInt(numeroB.value);
    if(isNaN(resultado)){
        resultado= "La operacion no incluye numeros"    
    }
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}