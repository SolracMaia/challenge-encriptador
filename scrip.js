const entradaMensagem = document.getElementById("caixaDeTexto");
const resultadoMensagem = document.getElementById("textoCopiado");
const cryptBtn = document.getElementById("crypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");

let guardarMensagem; 

document.addEventListener("DOMContentLoaded", function() {
    const caixaDeTexto = document.getElementById("caixaDeTexto");
    caixaDeTexto.value = caixaDeTexto.value.trim();
});


entradaMensagem.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-z\s]/g, ''); // Remove caracteres que não são letras minúsculas ou espaços
});



document.addEventListener("DOMContentLoaded", function() {
    entradaMensagem.value = entradaMensagem.value.toLowerCase(); // Converte todo o texto para minúsculas
});


function alterarElementos(){
    console.log("Função alterarElementos chamada.");
    var imagem = document.getElementById("imagem__desaparece");
    var textobloqueado = document.getElementById("textobloqueado");
    var areaDeTexto = document.getElementById("areaDeTexto");

    imagem.style.display = "none";
    textobloqueado.style.display = "none";
    areaDeTexto.style.display = "block";
}

const criptografar = () => {
    console.log("Função criptografar chamada.");
    const textoCriptografar = entradaMensagem.value;
    const charMap = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    let novoTextoCriptografado = '';
    
    for(let i = 0; i < textoCriptografar.length; i++) {
        const currentChar = textoCriptografar[i];
        novoTextoCriptografado += charMap[currentChar] || currentChar;
    } 
    resultadoMensagem.innerText = novoTextoCriptografado; 
        
    alterarElementos();
}

const descriptografar = () => {
    const textoDescriptografar = entradaMensagem.value;
    const charMap = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let novoTextoDescriptografar = textoDescriptografar.replace(/enter|imes|ai|ober|ufat/g, match => charMap[match]);

    resultadoMensagem.innerText = novoTextoDescriptografar;
    alterarElementos();
}


function copiarTexto() {
    const textoCopiado = document.getElementById("textoCopiado").value;
    
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            alert("Texto copiado com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao copiar texto:", error);
            alert("Erro ao copiar texto. Consulte o console para mais detalhes.");
        });
}


cryptBtn.addEventListener("click", criptografar);
decryptBtn.addEventListener("click", descriptografar);
