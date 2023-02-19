const typ1: string = "Test";
const element1 = document.getElementById('typ1') as HTMLElement;
element1.innerText = typ1;

const typ2: boolean = true;
const element2 = document.getElementById('typ2') as HTMLElement;
element2.innerText = typ2.toString();

const typ3: number = 3;
const element3 = document.getElementById('typ3') as HTMLElement;
element3.innerText = typ3.toString();