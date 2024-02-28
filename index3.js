export class Celular {
    constructor(marca, modelo, preco, armazenamento, cor, peso) {
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.armazenamento = armazenamento;
        this.cor = cor;
        this.peso = peso;
}

    comprar() {
        console.log(`Vou comprar o celular modelo: ${this.modelo}, da marca ${this.marca}, por R$ ${this.preco}`)
    }
}

const celular1 = new Celular('Samsung', 'Galaxy S21', 5000, '128GB', 'Preto', 200);
const celular2 = new Celular('Apple', 'Iphone 12', 6000, '256GB', 'Branco', 180);
const celular3 = new Celular('Xiaomi', 'Redmi Note 10', 2000, '64GB', 'Azul', 190);

for (const i in celular1) {
    console.log(`${i} = ${celular1[i]}`)
}

for (const i in celular2) {
    console.log(`${i} = ${celular2[i]}`)
}

console.log(celular1)
celular1.comprar()