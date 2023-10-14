import dotenv from "dotenv";

class Configuration {
    static port;
    static urlApi;
    static urlAgendamento;
    static urlAvaliacao;
    static urlMetas;
    static urlImagem;
    static urlPlano;
    static urlPaciente;
}

export function configEnvironments() {
    dotenv.config();
    Configuration.port = process.env.PORT;
    Configuration.urlApi = process.env.URL_API;
    Configuration.urlAgendamento = process.env.URL_AGENDAMENTO;
    Configuration.urlAvaliacao = process.env.URL_AVALIACAO;
    Configuration.urlMetas = process.env.URL_METAS;
    Configuration.urlImagem = process.env.URL_IMAGEM;
    Configuration.urlPlano = process.env.URL_PLANO_ALIMENTAR;
    Configuration.urlPaciente = process.env.URL_DADOS_PACIENTE;
}

export default Configuration;