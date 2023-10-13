import Configuration from "../config.js";
import { fetchWrapper } from "./infrastructure/WrapperFetch.js";

export default function makeAgendamentoGateway() {
    async function recuperarAgendamento(idPaciente) {
        const headers = {
            'codigo-paciente': idPaciente
        };
        const url = Configuration.urlApi + Configuration.urlAgendamento;
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

    return Object.freeze({
        recuperarAgendamento
    });
}