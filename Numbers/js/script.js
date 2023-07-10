const numero = Number(window.prompt('Digite um número que deseja avaliar: '));
const title = window.document.getElementById('numero-titulo');
const text = window.document.getElementById('texto');

title.innerHTML = numero;
text.innerHTML = `<p>A raiz quadrada do número é: ${Math.sqrt(numero, 2)}</p>`;
text.innerHTML += `<p>O número ${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
text.innerHTML += `<p>É um NaN? ${Number.isNaN(numero)}</p>`;
text.innerHTML += `<p>Arredondando o número para baixo temos: ${Math.floor(numero)}</p>`;
text.innerHTML += `<p>Arredondando o núemro para cima temos: ${Math.ceil(numero)}</p>`;
text.innerHTML += `<p>O número com duas casas decimais: ${numero.toFixed(2)}</p>`;
