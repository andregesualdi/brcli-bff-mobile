import makeAgendamentoGateway from "./agendamento.gateway.js";
import makeAvaliacaoGateway from "./avaliacao.gateway.js";

const agendamentoGateway = makeAgendamentoGateway();
const avaliacaoGateway = makeAvaliacaoGateway();

export {
    agendamentoGateway,
    avaliacaoGateway
};
