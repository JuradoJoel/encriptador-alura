const $ = id => document.getElementById(id);
let resultadoArea = document.querySelector(".esconderResultado");


function encriptar() {
    let texto = $('mensaje').value;
    let textoEncriptar = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (letra === "a") {
            textoEncriptar = textoEncriptar + "ai";
        } else if (letra === "e") {
            textoEncriptar = textoEncriptar + "enter";
        } else if (letra === "i") {
            textoEncriptar = textoEncriptar + "imes";
        } else if (letra === "o") {
            textoEncriptar = textoEncriptar + "ober";
        } else if (letra === "u") {
            textoEncriptar = textoEncriptar + "ufat";
        } else {
            textoEncriptar = textoEncriptar + letra
        }
    }
    console.log(textoEncriptar);
    $('resultado').textContent = textoEncriptar;
    function borrarContenido() {
        document.getElementById("mensaje").value = "";
    }
    borrarContenido();
}

                                                         

$('boton').addEventListener("click", () => {
    encriptar();
    $('esconderh2').classList.add("esconder");
    $('esconderh4').classList.add("esconder");
    $('muñeco').classList.add("esconder");
    resultadoArea.classList.remove("esconderResultado");
})


function desencriptar() {
    let textoDesencriptar = $('resultado').value
    .replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")    
    .replaceAll("ufat","u");
    
    $('resultado').textContent = textoDesencriptar;
}

$('boton2').addEventListener("click", () => {
    desencriptar();
});