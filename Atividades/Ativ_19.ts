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
let Senha = "Jorginho123!"

console.log(Senha)

function validarSenha(Senha: string){

    if(Senha.length <= 7){
        const val8 = new Validação(false, "Sua senha deve ter, no mínimo, 8 caracteres")
        console.log(val8.msg)
        return
    }
    if(!Senha.match(/[0-9]/)){
        const valNum = new Validação(false, "Sua senha deve conter um digito numérico")
        console.log(valNum.msg)
        return
    }    
    if(Senha.match(/![!@#$%¨&*()=_+-]/)){
        const valSim = new Validação(false, "Sua senha deve conter um digito alfanumerico") 
        console.log(valSim.msg)
        return 
    }
        const valCorreta = new Validação(true, "Suas credenciais são o suficiente para criar uma senha")
        console.log(valCorreta.msg)
    

}
validarSenha(Senha)