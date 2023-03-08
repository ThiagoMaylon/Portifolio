const letter = document.querySelector('.mensagem')

function escreva(el){
    const textArray = letter.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => (el.innerHTML += letter), 70 * i)
    });
}
escreva(letter)
