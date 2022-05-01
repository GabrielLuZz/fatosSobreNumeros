const date = document.querySelector('#date');
const number = document.querySelector('#number');
const pesquisar = document.querySelector('#pesquisar');
const lista = document.querySelector('#lista');

pesquisar.addEventListener('click', search)

async function search(e) {
    e.preventDefault();

    const [year, month, day] = date.value.split('-')
    const randomNumber = number.value;

    const responseYear = await fetch(`http://numbersapi.com/${year}/year?json`);
    const yearJson = await responseYear.json();

    const responseDate = await fetch(`http://numbersapi.com/${month}/${day}/date?json`);
    const dateJson = await responseDate.json();

    const responseNumber = await fetch(`http://numbersapi.com/${randomNumber}/trivia?json`);
    const numberJson = await responseNumber.json();

    lista.innerText = '';

    const liYear = document.createElement('li');
    const liDate = document.createElement('li');
    const liNumber = document.createElement('li');

    liYear.innerText = yearJson.text;
    liDate.innerText = dateJson.text;
    liNumber.innerText = numberJson.text;

    lista.append(liYear, liDate, liNumber);


}