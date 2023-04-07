class Samochod {
    licznik: number = 0;

    jedz(km: number): void {
        this.licznik += km;
    }

    opiszStan(): string {
        return "Przebieg auta: " + this.licznik + " km";
    }
}

const samochod1: Samochod = new Samochod();
samochod1.jedz(100);

renderujTekst("stanLicznikaAuta", samochod1.opiszStan());