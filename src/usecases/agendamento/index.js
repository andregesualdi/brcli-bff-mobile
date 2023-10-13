import { agendamentoGateway } from "../../gateways/index.js";
import makeGetAgendamento from "./getAgendamento.js";

const getAgendamento = makeGetAgendamento(agendamentoGateway);

const agendamentoService = Object.freeze({
    getAgendamento
});

export default agendamentoService;

export {
    getAgendamento
};

