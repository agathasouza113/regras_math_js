function calcular(){
    const preco = parseFloat(document.getElementById('preco').value);
    const taxaporcentagem = parseFloat(document.getElementById('taxa').value);
    const descontoReais = parseFloat(document.getElementById('descontoReais').value)

    const valorTaxa = preco * (taxaporcentagem/100);
    const precoComDesconto = preco - descontoReais;
    const lucroBruto = precoComDesconto - valorTaxa;

    const lucroArredondado = Math.ceil(lucroBruto);

    document.getElementById('out-taxa').innerText = "R$" + valorTaxa.toFixed(2);
    

    valorFinal = document.getElementById('out-lucro');
    valorFinal.innerText = "R$" + lucroArredondado.toFixed(2); 

    if(lucroArredondado < 50) {
        valorFinal.style.color = "red";
    } else {
        valorFinal.style.color = "green";
    }

    document.getElementById('resultado').classList.remove('hidden');
}