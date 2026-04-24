/*Função de validação de senha*/

/*
Crie uma função chamada "validarSenha" que receba uma string como parâmetro e retorne um
objeto com duas propriedades: "valida" (booleano) e "mensagem" (string explicando o resultado).
A senha é válida apenas se tiver ao menos 8 caracteres, contiver pelo menos um número e não
contiver espaços. Teste a função com ao menos 4 senhas diferentes.
*/

class Validação{
    valida: boolean;
    msg: string;                                                        
    constructor(valida: boolean, msg: string){
        this.valida = valida;
        this.msg = msg
    }
}

function validarSenha(Senha: string){

    console.log(Senha)


    if(Senha.length <= 8){
        if(Senha){

        }
    }
    else{
        const val8 = new Validação(false, "Sua senha não teve a quantidade de caracteres sufuciente, tente uma senha com 8 caracteres.")
    }
}
validarSenha("12345678")