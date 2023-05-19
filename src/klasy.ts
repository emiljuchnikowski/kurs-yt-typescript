interface Pojazd {
    jedz(km: number): void;
    opiszStan(): string;
}

abstract class Samochod implements Pojazd {
    licznik: number = 0;

    jedz(km: number): void {
        this.licznik += km;
    }

    abstract opiszStan(): string;
}

class Bmw extends Samochod {
    opiszStan(): string {
        return "Przebieg auta (bmw): " + this.licznik + " km";
    }
}

class Opel extends Samochod {
    opiszStan(): string {
        return "Przebieg auta (opel): " + this.licznik + " km";
    }
}

let samochod1: Samochod = new Bmw();
samochod1.jedz(100);
samochod1 = new Opel();
samochod1.jedz(100);
