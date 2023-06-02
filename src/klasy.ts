interface Pojazd {
    jedz(km: number): void;
    opiszStan(): string;
}

abstract class Samochod implements Pojazd {
    private licznik: number = 0;

    jedz(km: number): void {
        this.licznik += km;
    }

    pobierzStanLicznika(): number {
        return this.licznik;
    }

    abstract opiszStan(): string;

    protected zwrocSformatowanyStan(marka: string): string {
        return "Przebieg auta (" + marka + "): " + this.licznik + " km";
    }
}

class Bmw extends Samochod {
    opiszStan(): string {
        return this.zwrocSformatowanyStan("bmw");
    }
}

class BmwWLeasingu extends Bmw {
    constructor(
        public leasingDlaFirmy: string
    ) {
        super();
    }

    override opiszStan(): string {
        const stanBazowy = super.opiszStan();
        return stanBazowy + ', leasing dla firmy: ' + this.leasingDlaFirmy;
    }
}

class Opel extends Samochod {
    opiszStan(): string {
        return this.zwrocSformatowanyStan("opel");
    }
}

let samochod1: Samochod = new Bmw();
samochod1.jedz(100);
samochod1 = new Opel();
samochod1.jedz(100);

const stanLicznika = samochod1.pobierzStanLicznika();
