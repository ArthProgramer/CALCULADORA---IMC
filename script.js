let botao = document.getElementById("botao");

let validarPeso = /^[0-9.]+$/;
let validarAltura = /^\d{1}\.\d{2}$/;


botao.addEventListener("click", function(){
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    
    let trueRegexPeso = validarPeso.test(peso);
    let trueRegexAltura = validarAltura.test(altura);

    let imc = peso / (altura * altura);

    console.log(trueRegexPeso);
    if(trueRegexPeso == true && trueRegexAltura == true) {
    document.getElementById("imc").textContent = imc.toFixed(2);
    }else{
        alert("\nTem que preencher apenas com números e em altura usar o padrão em metro Exemplo: 1.80");
    }
});

