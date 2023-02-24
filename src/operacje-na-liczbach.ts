let wynik: number = 0;
const element = document.getElementById('wynik') as HTMLElement;

const zmienna1: number = 2;
const zmienna2: number = 3;

wynik = zmienna1 + zmienna2;
element.innerText = wynik.toString();