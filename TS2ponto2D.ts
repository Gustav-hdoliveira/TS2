class Ponto2D {
    constructor(){

    }

}
class Ponto2DCordenadas extends Ponto2D {
    y: number
    x: number
    constructor(altura: number, largura: number) {
        super()
        this.y = altura
        this.x = largura
    }
    
    set(xUP, yUP){
        this.y = yUP
        this.x = xUP
    }
    get(){
        console.log(`x = ${this.x}, y = ${this.y}`)
    }
    movPonto(coordNEW, numNEW){
        if (coordNEW.toUpperCase() == 'X') {
            this.x = numNEW
            console.log('Coordenada x redefinida')
        } else {
            this.y = numNEW
            console.log('Coordenada y redefinida')
        }
    }
    toString(): string{
        return `x e y atual: ${this.x, this.y}`
    }
    public equals(outroPT: Ponto2DCordenadas): boolean{
        if(outroPT.x == this.x && outroPT.y == this.y){
            return true
        } else {
            return false
        }
    }
    distancia(outroPonto: Ponto2DCordenadas): void{
        console.log(`x e y atual: ${this.x, this.y}, x e y do outro ponto: ${outroPonto.x, outroPonto.y}.`)
        let diferençaX = this.x - outroPonto.x
        let diferençaY = this.y - outroPonto.y
        if (diferençaX <= 0) {
            outroPonto.x - this.x
            console.log(`O x atual é menor que o do outro ponto`)
        } else {
            this.x - outroPonto.x
            console.log(`O x atual é maior que o do outro ponto`)
        }
        if (diferençaY <= 0) {
            outroPonto.y - this.y
            console.log("O y atual é menor que o do outro ponto")
        } else {
            this.y - outroPonto.y
            console.log("O y atual é maior que o do outro ponto")
        }
    }
    public clone(): Ponto2DCordenadas{
        return new Ponto2DCordenadas(this.x, this.y)
    }
}
class PT2Dponto extends Ponto2D{
    x: number
    y: number

    constructor(outroPonto: Ponto2DCordenadas){
        super()
        this.x = outroPonto.x
        this.y = outroPonto.y
    }
    set(xUP, yUP){
        this.y = yUP
        this.x = xUP
    }
    get(){
        console.log(`x = ${this.x}, y = ${this.y}`)
    }
}

let PT2DCoordenadas = new Ponto2DCordenadas(12, 22)
let PT2Dpontocp = new PT2Dponto(12, 23)
PT2DCoordenadas.set(20, 33)
