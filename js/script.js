    function luas() {
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;

    var luas = (alas * tinggi) / 2;
    document.getElementById('luas').innerHTML = luas;
}

function kel() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    var kel = parseFloat(a) + parseFloat(b) + parseFloat(c);
    document.getElementById('kel').innerHTML = kel;
}


document.getElementById('luasformBtn').addEventListener('click', function () {
    document.getElementById('luasform').style.display = 'block';
    document.getElementById('Kelilingform').style.display = 'none';
});

document.getElementById('kelilingformBtn').addEventListener('click', function () {
    document.getElementById('luasform').style.display = 'none';
    document.getElementById('Kelilingform').style.display = 'block';
});


document.getElementById('ulangiluas').addEventListener('click', function () {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('luas').innerHTML = '-';
});


document.getElementById('ulangikeliling').addEventListener('click', function () {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('kel').innerHTML = '-';
    
});
