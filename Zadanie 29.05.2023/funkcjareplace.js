const szukanietekstureplace = document.getElementById("tekstreplaceAll").innerText;
document.querySelector("#submit7").addEventListener("click", function () {
    const wynik = szukanietekstureplace.replaceAll('Microsoft','JanuszPol')
    document.getElementById("tekstreplaceAll").innerHTML=wynik;
});
document.querySelector("#submit8").addEventListener("click", function () {
    const wynik = szukanietekstureplace.replace('Edge','Janusz Explorer')
    document.getElementById("tekstreplace").innerHTML=wynik;
});