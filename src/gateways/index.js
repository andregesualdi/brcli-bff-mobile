import makeAgendamentoGateway from "./agendamento.gateway.js";
import makeAvaliacaoGateway from "./avaliacao.gateway.js";
import makePlanoAlimentarGateway from "./plano-alimentar.gateway.js";

const agendamentoGateway = makeAgendamentoGateway();
const avaliacaoGateway = makeAvaliacaoGateway();
const planoAlimentarGateway = makePlanoAlimentarGateway();

export {
    agendamentoGateway,
    avaliacaoGateway,
    planoAlimentarGateway
};
