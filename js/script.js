//Chamando elementos do HTML, criando variáveis
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

//função para calcular:
function calcular(){
    //Pegando os valores dos inputs
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    //Cálculo
    let qtdCarne = carnePPessoa(duracao) * adultos + (carnePPessoa(duracao)/2 * criancas);

    let qtdCerveja = cervejaPPessoa(duracao) * adultos;
    
    let qtdBebida = bebidaPPessoa(duracao) * adultos + (bebidaPPessoa(duracao)/2 * criancas);

    //Exibindo o resultado no HTML
    resultado.innerHTML = `<p>${Math.ceil(qtdCarne/1000)} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdCerveja)} litros de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdBebida)} litros de Água/Refrigerante</p>`
}

// Carne - 400g/pessoa, +6h - 650g/pessoa
// Crianças valem por 0,5
function carnePPessoa(d){
    if(d >=6){
        return 650;
    } else{
        return 400;
    }
}

// Cerveja - 1.2l/pessoa, +6h - 2l/pessoa
function cervejaPPessoa(d){
    if(d >=6){
        return 2
    } else{
        return 1.2
    }
}

// Refrigerante/água - 1l/pessoa, +6h - 1,5l/pessoa
function bebidaPPessoa(d){
    if(d >= 6){
        return 1.5
    } else{
        return 1
    }
}