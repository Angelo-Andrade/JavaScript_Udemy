function programa () {
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    //forma menos usual
    //formulario.onsubmit = function (evento){
    //    evento.preventDefault();
    //    alert(1);
    //    console.log('Foi enviado');
    //};
    
    //Uma forma mais usual:
    let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log(`O formulário não foi enviado ${contador} vezes.`);
        contador++;
        
        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas)
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    formulario.addEventListener('submit', recebeEventoForm);
}
programa();