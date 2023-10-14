import { fetchWrapper } from "./infrastructure/WrapperFetch.js";
import Configuration from "../config.js";

export default function makePacienteGateway() {
    async function recuperarDadosPaciente(idPaciente) {
        const headers = {
            'codigo-paciente': idPaciente
        };
        const url = Configuration.urlApi + Configuration.urlPaciente;
        let response;
        await fetchWrapper.get(url, headers)
            .then(data => {
                response = data;
            })
            .catch((error) => {
                throw error;
            });
        return response;
    }

    async function updateImagem(idPaciente, paciente) {
        const headers = {
            'codigo-paciente': idPaciente
        };
        const body = {
            imagem: paciente.imagem
        };
        const url = Configuration.urlApi + Configuration.urlImagem;
        let response;
        await fetchWrapper.put(url, body, headers)
            .then(data => {
                response = data;
            })
            .catch((error) => {
                throw error;
            });
        return response;
    }

    return Object.freeze({
        recuperarDadosPaciente,
        updateImagem
    });
}
