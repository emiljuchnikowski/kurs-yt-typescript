function renderujTekst(idElmentu: string, tekst: string): void {
    const element = document.getElementById(idElmentu) as HTMLElement;
    element.innerText = tekst;
}

function pobierzPogrubionyTekst(tekst: string): string {
    const html = "<b>" + tekst + "</b>";
    return html;
}