console.log("Witaj świecie");
console.log(window);
console.log("Witaj", window, 100);

console.table( [1, 2, 3, 4, 5]);

console.group("Nazwa grupy");
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); // koniec grupy

console.groupCollapsed("Nazwa grupy"); //grupa domyślna zwinięta
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); // koniec grupy

console.time("test 1"); // rozpoczyna test, zaczyna liczyc czas
for (let i = 0; i < 100000; i++) {
    ;
}
console.timeEnd("test 1"); //koniec testu

function test() {
    let i = 0;
    //debugger; debugger jest instrukcja, ktora przerywa dzialanie w tym miejscu. Widocznosc
}
test();

var text = "ala";
text = "Janek ma żyrafę"; // var to zmienna
console.log({text});

let a = 0;
a = 10; //wszystko ok, bo let


const b = 0;
//b = 10; //błąd - do stałej nie możemy przypisać nowej wartości

const name = "Ala";
//name = "Monika"; // błąd

const tab  = [1,2,3]; //tablica to też obiekt
tav[3] = 4;
tab.push(5, 6);
console.log(tab); // [1, 2, 3, 4, 5, 6]
tab = [1, 2, 3, 4, 5, 6]; //błąd - podstawiona zupelnie nowa tablica