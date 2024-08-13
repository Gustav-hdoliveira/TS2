let reader = require("readline-sync")

class Contador {
    estoque: Array<string>

    constructor(estoquedeObjetos: Array<string>){
        this.estoque = estoquedeObjetos
    }

    zerar(){
        this.estoque = [] //define o estoque como um novo array vazio

        console.log('Dados zerados')        
    }

    incrementar(valorAdicionado){
        this.estoque.push(valorAdicionado)
        console.log('valor adicionado a banco de dados do estoque')
    }

    valor(): void{
        let valores = (`O banco de dados tem ${this.estoque.length} valores dentro de si, com os valores sendo: ${this.estoque}`)
        console.log(valores)
    }
}

let contador = new Contador(["geleia de morango", "Freazer ponto frio"])
contador.zerar()
contador.incrementar('Fortnight')
contador.incrementar('Gayland')
contador.valor()