const przyciskDoDodaniaDoTablicy = document.getElementById('dodajDoTablicy');
const listaElementowTablicy = document.getElementById('elementyTablicy');

const tablica: Array<number> = [];
let aktualnaLiczba = 1;

przyciskDoDodaniaDoTablicy?.addEventListener('click', function () {
    tablica.push(aktualnaLiczba);
    aktualnaLiczba++;

    let html = '';

    for(let index = 0; index < tablica.length; index++) {
        const elementTablicy = tablica[index];

        html += "<li>" + elementTablicy + "</li>";
    }

    if (listaElementowTablicy) {
        listaElementowTablicy.innerHTML = html;
    }
});