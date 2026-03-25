function calcular(){
    const preco = parseFloat(document.getElementById('preco').value);
    const taxaporcentagem = parseFloat(document.getElementById('taxa').value);
    const descontoPorcentagem = parseFloat(document.getElementById('desconto').value);
    const descontoReais = parseFloat(document.getElementById('descontoReais'))
    
    const valorDesconto = preco * (desconto)

    const valorTaxa = preco * (taxaporcentagem/100);
    const lucroBruto = preco - valorTaxa;

    const lucroArredondado = Math.floor(lucroBruto);

    document.getElementById('out-taxa').innerText = "R$" + valorTaxa.toFixed(2);
    document.getElementById('out-lucro').innerText = "R$" + lucroArredondado.toFixed(2);
    document.getElementById('resultado').classList.remove('hidden');
}