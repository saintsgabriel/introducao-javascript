var titulo = document.querySelector(".titulo"); //busca na página o seletor especificado

titulo.textContent = "Aparecida Nutricionista"; // Altera o conteudo de texto do elemento

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

var tdImc = paciente.querySelector(".info-imc");

tdImc.textContent = imc;