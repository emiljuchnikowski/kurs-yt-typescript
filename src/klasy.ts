interface Pojazd {
    jedz(km: number): void;
    opiszStan(): string;
}

abstract class Samochod implements Pojazd {
    private licznik: number = 0;
    private pasazerowieWSamochodzie = 0;

    protected maksymalnaIloscPasazerow = 5;

    get pasazerowie(): number {
        return this.pasazerowieWSamochodzie;
    }

    set pasazerowie(ilosc: number) {
        if (ilosc < 0) throw new Error("Ilosci pasazerow musi byc wieksza od zera");
        if (ilosc > this.maksymalnaIloscPasazerow) { 
            throw new Error("Ilosci pasazerow musi byc wieksza mniejsza od: " + (this.maksymalnaIloscPasazerow + 1));
        }

        this.pasazerowieWSamochodzie = ilosc;
    }

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
    constructor() {
        super();
        this.maksymalnaIloscPasazerow = 4;
    }

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
samochod1.pasazerowie = 3;
const pasazerowie = samochod1.pasazerowie;
samochod1 = new Opel();
samochod1.jedz(100);

const stanLicznika = samochod1.pobierzStanLicznika();
