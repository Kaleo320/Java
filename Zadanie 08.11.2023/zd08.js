<script>
    function licz(nr) {
    lmpp = 1000000; // 6 miejsc po przecinku
    x = eval(document.form1.x.value);
    y = eval(document.form1.y.value);

    if (nr=="+") wynik = x+y;
    if (nr=="-") wynik = x-y;
    if (nr=="*") wynik = x*y;
    if (nr=="/") wynik = x/y;
    if (nr=="^") wynik = Math.pow(x,y);

    document.form1.operacja.value=nr;
    document.form1.wynik.value=Math.round(wynik*lmpp)/lmpp;
}
</script>

<form name="form1">
    <input type="text" name="x" value="0" style="width:50px;" />
    <input type="text" name="operacja" style="width:20px;" readOnly="readonly" />
    <input type="text" name="y" value="0" style="width:50px;" /> =
    <input type="text" name="wynik" style="width:100px;" readOnly="readonly" />
    <br />
    <input type="button" value="  +  " onClick="licz('+')" />
    <input type="button" value="  -  " onClick="licz('-')" />
    <input type="button" value="  x  " onClick="licz('*')" />
    <input type="button" value="  /  " onClick="licz('/')" />
    <input type="button" value="  ^  " onClick="licz('^')" />
</form>