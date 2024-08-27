
function encriptar() {
    let area = document.getElementById('area').value;

    if (area != "") {
        var texto = document.getElementById('area').value;
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector("#area__final").innerText = textoCifrado;
        document.querySelector('#area').innerText;
        document.getElementById('img_sin_mensaje').style.display = "none";
        document.getElementById('respuesta').style.display = "grid";
    }
}

var boton1 = document.querySelector("#boton__1");
boton1.onclick = encriptar;

function desencriptar() {
    var texto = document.querySelector("#area").value;
    if (texto != "") {
       
        var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector("#area__final").innerText = textoCifrado;
        document.querySelector("#area").innerText;
        document.getElementById('img_sin_mensaje').style.display = "none";
        document.getElementById('respuesta').style.display = "grid";
    }
}

var boton2 = document.querySelector("#boton__2");
boton2.onclick = desencriptar;

function copiar() {


    let area = document.getElementById('area__final').innerText;
    document.querySelector("#area").value = area


}