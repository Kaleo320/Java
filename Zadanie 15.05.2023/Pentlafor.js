document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('jeden');




    for (var i = 1; i <= 100; i++) {
        var input = document.createElement('input');
        input.id = 'input' + i;
        input.name = 'input' + i;
        input.style.margin = '10dpx';
        input.style.boxShadow = '5px 5px lightblue';
        input.placeholder = 'Element numer ' + i;

        form.appendChild(input);

        if (i % 5 === 0) {
            form.appendChild(document.createElement('br'));
        }
    }
});