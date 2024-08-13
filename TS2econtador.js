var reader = require("readline-sync");
var Contador = /** @class */ (function () {
    function Contador(estoquedeObjetos) {
        this.estoque = estoquedeObjetos;
    }
    Contador.prototype.zerar = function () {
        this.estoque = []; //define o estoque como um novo array vazio
        console.log('Dados zerados');
    };
    Contador.prototype.incrementar = function (valorAdicionado) {
        this.estoque.push(valorAdicionado);
        console.log('valor adicionado a banco de dados do estoque');
    };
    Contador.prototype.valor = function () {
        var valores = ("O banco de dados tem ".concat(this.estoque.length, " valores dentro de si, com os valores sendo: ").concat(this.estoque));
        console.log(valores);
    };
    return Contador;
}());
var contador = new Contador(["geleia de morango", "Freazer ponto frio"]);
contador.zerar();
contador.incrementar('Fortnight');
contador.incrementar('Gayland');
contador.valor();
