var menu = {
    heigh: 300,
    width: 12,
    obterTamanho(){
        return this.heigh;
    }
} 


var cachorro = {
    raca: "Labrador",
    idade: 5,
    nome: "Afonso",
    caracteristica: "Late para homens",
    passouAlguemNaRua(pessoa){
        if(pessoa === "homem")
            return this.nome + " comecou a latir"
        else return this.nome + " ignorou a situacao"
    }
}

console.table(cachorro);
console.log(cachorro);



var nome = "Gabriel";

nome.length //8
nome.charAt(1) //a
nome.replace("el", "123") //Gabri123
nome; //Gabriel