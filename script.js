// Coletando os ids dos elementos
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");


// Iniciando a lógica de programação
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let novaSenha ="";


// Setando o valor do slider como texto
sizePassword.innerHTML = sliderElement.value;
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}


// Função para gerar a senha randomicamente com o tamanho sizePassword
function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide"); // mostrar o containerPassword
    password.innerHTML = pass;
    novaSenha = pass; // atribuindo pass à novaSenha
}

// Math.floor -> para gerar um número inteiro
// Math. random -> para gerar um número aleatório
// n -> tamanho do charset


// Função para coletar a senha gerada
function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha); // passando a nova senha para a área de transferência

}