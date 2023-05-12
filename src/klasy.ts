interface Pojazd {
    jedz(km: number): void;
    opiszStan(): string;
}

interface Samochod extends Pojazd {
    licznik: number;
}

class Bmw implements Samochod {
    licznik: number = 0;

    jedz(km: number): void {
        this.licznik += km;
    }

    opiszStan(): string {
        return "Przebieg auta (bmw): " + this.licznik + " km";
    }
}

class Opel implements Samochod {
    licznik: number = 0;

    jedz(km: number): void {
        this.licznik += km;
    }

    opiszStan(): string {
        return "Przebieg auta (opel): " + this.licznik + " km";
    }
}

let samochod1: Samochod = new Bmw();
samochod1.jedz(100);
samochod1 = new Opel();
samochod1.jedz(100);
