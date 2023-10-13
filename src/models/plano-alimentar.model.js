class PlanoAlimentar {
    constructor(
        refeicoes
    ) {
        this.refeicoes = refeicoes;
    }

    static mapResponseToPlano(res) {
        return new PlanoAlimentar(res.refeicoes);
    }
}

export default PlanoAlimentar;