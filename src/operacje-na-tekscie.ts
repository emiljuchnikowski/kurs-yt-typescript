let calyTekst: string = "";
const elementTekstu = document.getElementById('calyTekst') as HTMLElement;

const zmiennaTekst1 = "Wartosc 1";
const zmiennaTekst2 = "Wartosc 2";

calyTekst = "<b>" + zmiennaTekst1 + " + " + zmiennaTekst2 + "</b>";
elementTekstu.innerHTML = calyTekst;