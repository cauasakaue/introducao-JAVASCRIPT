var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
//Extrai informações do Paciente do form
    obtemPacienteDoFormulario(form);

var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});

// dividir em três funções para trabalhar com tarefas mwnores
function obtemPacienteDoFormulario(form){
    var paciente = {
       
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.testcontent = paciente.IMC;
    }

    return paciente;
   
}
//cria a tr e a td do paciente
var paciente = montair(paciente);

function montair(paciente){

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.testcontent = calculaIMC(peso,altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(IMCTd);
}