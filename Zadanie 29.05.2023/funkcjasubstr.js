var tekst = document.getElementsByClassName('heh')[0].innerText;
var plus = document.getElementById('planszofe');
plus.addEventListener('click',function (){
    alert(tekst.substr(27,36));
});
var minus = document.getElementById('gry');
minus.addEventListener('click', function (){
    alert(tekst.substr(37, ));
});
