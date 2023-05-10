var msg = document.querySelectorAll(".aviso");

function encriptarMsg(msg){
    let emgs = "";
    for (let i = 0; i < msg.length; i++){
        let char = msg[i];
        //La letra "e" es convertida a "enter"
        //La letra "i" es convertida a "imes"
        //La letra "a" es convertida a "ai"
        //La letra "o" es convertida a "ober"
        //La letra "u" es convertida a "ufat"
        if (char.match("e")){
            emgs+="enter";
        }
        else if (char.match("i")){
            emgs+="imes";
        }
        else if  (char.match("a")){
            emgs+="ai";
        }
        else if  (char.match("o")){
            emgs+="ober";
        }
        else if  (char.match("u")){
            emgs+="ufat";
        }
        else{
            emgs+=char;
        }
    }
    return emgs;
};

function desencriptarMsg(msg){
    let dmsg = "";
    let i = 0;
    while (i < msg.length) {
      if (msg.substring(i, i + 5) === "enter") {
        dmsg += "e";
        i += 5;
      } else if (msg.substring(i, i + 4) === "imes") {
        dmsg += "i";
        i += 4;
      } else if (msg.substring(i, i + 2) === "ai") {
        dmsg += "a";
        i += 2;
      } else if (msg.substring(i, i + 4) === "ober") {
        dmsg += "o";
        i += 4;
      } else if (msg.substring(i, i + 4) === "ufat") {
        dmsg += "u";
        i += 4;
      } else {
        dmsg += msg[i];
        i += 1;
        }
    }
    return dmsg;
}

var inputMsg = document.getElementById("aviso");
var botonEncriptar = document.getElementById("botone"); 
botonEncriptar.addEventListener("click", fun1);

function fun1() {
  var msg = inputMsg.value;
  document.getElementById("rectInicial").style.display = "none";
  document.getElementById("rectFinal").style.display = "inherit";
  document.getElementById("rectFinal").value = encriptarMsg(msg);
  document.getElementById("rectFinal").innerHTML = encriptarMsg(msg);
};

var botonDesencriptar = document.getElementById("botond");
botonDesencriptar.addEventListener("click", fun2);

function fun2(){
  var msg = inputMsg.value;
  document.getElementById("rectInicial").style.display = "none";
  document.getElementById("rectFinal").style.display = "block";
  document.getElementById("rectFinal").value = desencriptarMsg(msg);
  document.getElementById("rectFinal").innerHTML = desencriptarMsg(msg);
  console.log(document.getElementById("rectFinal"))
};

var copiarTexto = document.querySelector("#copiar");
var textoCopiado = document.querySelector("#rectFinal");
copiarTexto.addEventListener("click", () => {
  navigator.clipboard.writeText(textoCopiado.value)
});