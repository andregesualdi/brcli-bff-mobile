import dotenv from "dotenv";

class Configuration {
    static port;
    static urlApi;
    static urlAgenda;
    static urlAgendar;
    static urlAvaliacao;
    static urlMetas;
    static urlListar;
    static urlPaciente;
    static urlCodigo;
    static urlPlano;
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
}

export default Configuration;