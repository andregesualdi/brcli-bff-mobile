class Avaliacao {
    constructor(
        arquivo
    ) {
        this.arquivo = arquivo
    }

    static mapResponseToAvaliacao(res) {
        return new Avaliacao(res.arquivo);
    }
}

export default Avaliacao;