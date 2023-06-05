const szukanietekstureplace = document.getElementById("tak").innerText;
document.querySelector("#submit7").addEventListener("click", function () {
    const wynik = szukanietekstureplace.toUpperCase('Microsoft','JanuszPol')
    document.getElementById("tak").innerHTML=wynik;
});
document.querySelector("#submit8").addEventListener("click", function () {
    const wynik = szukanietekstureplace.toLowerCase('Edge','Janusz Explorer')
    document.getElementById("tak").innerHTML=wynik;
});
