var titulo = document.querySelector(".titulo"); //busca na página o seletor especificado

titulo.textContent = "Aparecida Nutricionista"; // Altera o conteudo de texto do elemento

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    if (peso <= 0 || peso >= 1000){
        tdImc.textContent = "Peso inválido!";
        console.log("Peso inválido!");
        paciente.classList.add("paciente-invalido");
    } else if (altura <= 0 || altura >= 3){
        tdImc.textContent = "Altura Inválida!";
        console.log("Altura Inválida");
        paciente.classList.add("paciente-invalido");
    } else{
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura)
    return imc.toFixed(2);
}