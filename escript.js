let buttom = document.getElementById('btncalcular');
let nome = document.getElementById('cxnome');
let altura = document.getElementById('cxaltura');
let peso = document.getElementById('cxpeso');
let res = document.getElementById('cxresultado');
let sit = '';

function calcular(){
    if(nome.value.length == 0 && altura.value.length == 0 && peso.value.length == 0){
        alert('[ERRO] Preencha os dados!!!');
       
    }

    let n = nome.value;
    let a = altura.value;
    let p = peso.value;
    let imc = (p/(a*a)).toFixed(2);
  
    if(imc < 18.5){
        sit = 'abaixo do peso.';
    }else if(imc < 25){
        sit = 'Peso ideal';
    }else if(imc<30){
        sit = 'acima do peso';
    }else if (imc < 35){
        sit = 'obesidade 1';
    }else if (imc < 39){
        sit = 'obsidade 2';
    }else if (imc < 41){
        sit = 'obesidade 3 (mórbida)';
    }
 
    res.innerText = `Olá ${n} seu IMC é ${imc} você está ${sit}`;
    
  
}
   
buttom.addEventListener('click', calcular)