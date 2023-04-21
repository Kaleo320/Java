let Miesiac = Math.floor(Math.random() * 15) +  1;
let Miesiactext = "";
switch (Miesiac){
    case 1:
    case 2:
    case 3:
        Miesiactext = "I Kwartał";
        break;
    case 4:
    case 5:
    case 6:
        Miesiactext = "II Kwartał";
        break;
    case 7:
    case 8:
    case 9:
        Miesiactext = "III Kwartał";
        break;
    case 10:
    case 11:
    case 12:
        Miesiactext = "IV Kwartał";
        break;
    default:

    Miesiactext = "Błędny numer miesiąca";
}
document.getElementById('tak').innerHTML= Miesiactext;
document.getElementById('numer').innerHTML= Miesiac;