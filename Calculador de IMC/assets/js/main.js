function criarPrgf () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const result = document.querySelector('.resultado');
    result.innerHTML = '';

    const p = criarPrgf();

    if(isValid) {
        p.classList.add('prgf-resultado');
    }
    else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    result.appendChild(p);
}

function getIMC (peso, altura) {
    const imc = (peso/(altura**2));
    return imc.toFixed(1);
}

function getIndice (imc) {
    indice = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];
    if(imc<18.5) return indice[0];
    if(imc<25) return indice[1];
    if(imc<30) return indice[2];
    if(imc<35) return indice[3];
    if(imc<40) return indice[4];
    if(imc=>40) return indice[5];
}

function programa () {
    const form = document.querySelector('.form');
    
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const inputPeso = evento.target.querySelector('#peso');
        const inputAltura = evento.target.querySelector('#altura');
        
        peso = Number(inputPeso.value);
        altura = Number(inputAltura.value);

        if(!peso) return setResultado('Peso inválido.', false);
        if(!altura) return setResultado('Altura inválida.', false);
        
        const imc = getIMC(peso, altura);
        const indiceImc = getIndice(imc);

        const msg = `Seu IMC é ${imc} (${indiceImc}).`;

        setResultado(msg, true);
    }
    form.addEventListener('submit', recebeEventoForm);
        
}
programa();
