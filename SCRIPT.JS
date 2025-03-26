class colaborador {
    constructor(nome, salario, dataAdmissao) {
        this.nome = nome
        this.salario = salario
        this.dataAdmissao = dataAdmissao
    }

    calcularBonus() {
        console.log(`${this.nome} ganhará bônus de: ${this.salario * 0.1}, tendo um salario total de: ${this.salario}`);
    }

    exibirDetalhes() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Salário: ${this.salario}`)
        console.log(`Data de admissão: ${this.dataAdmissao}`)
        console.log(`Bônus salarial de R$${this.salario * 0.1}`);
    }
}

class gerente extends colaborador {
    constructor(nome, salario, dataAdmissao, Departamento) {
        super(nome, salario, dataAdmissao)
        this.Departamento = Departamento
    }

    calcularBonus() {
        console.log(`Gerente ${this.nome} do departamento ${this.Departamento} ganhará bônus de: ${this.salario * 0.2}, tendo um salario total de: ${this.salario}`);
    }
}

const funcionarios = [
    new colaborador("Ana", 3000, "15/03/2018"),
    new colaborador("Carlos", 2800, "22/08/2020"),
    new gerente("Fernanda", 12000, "10/01/2015", "Vendas"),
    new gerente("Juliano", 15000, "05/07/2012", "Financeiro")
]

console.log("DETALHES FUNCIONÁRIOS");
console.log("");
funcionarios.forEach((funcionario) => funcionario.exibirDetalhes());
console.log("");

console.log("BONUS FUNCIONÁRIOS");
console.log("");
funcionarios.forEach((funcionario) => funcionario.calcularBonus());
console.log("");
