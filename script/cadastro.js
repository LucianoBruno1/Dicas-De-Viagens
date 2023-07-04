var arrayCadastroEmail = [];
var arrayCadastroNome = [];
var arrayCadastroSenha = [];
var arrayCadastroSenhaConfirmacao = [];

function cadastrar(){
    var cadastroEmail = document.getElementById('email').value;
    var cadastroNome = document.getElementById('name').value;
    var cadastroSenha = document.getElementById('password').value;
    var cadastroSenhaConfirmacao = document.getElementById('password-confirm').value;

    arrayCadastroEmail.push(cadastroEmail);
    arrayCadastroNome.push(cadastroNome);
    arrayCadastroSenha.push(cadastroSenha);
    arrayCadastroSenha.push(cadastroSenhaConfirmacao);


    console.log(arrayCadastroEmail);
    console.log(arrayCadastroNome);
    console.log(arrayCadastroSenha);
    console.log(arrayCadastroSenhaConfirmacao);
}

console.log(arrayCadastroEmail)