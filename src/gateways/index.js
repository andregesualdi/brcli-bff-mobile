import makeAgendamentoGateway from "./agendamento.gateway.js";
import makeAvaliacaoGateway from "./avaliacao.gateway.js";
import makePlanoAlimentarGateway from "./plano-alimentar.gateway.js";
import makeMetasGateway from "./metas.gateway.js";
import makePacienteGateway from "./paciente.gateway.js";

const agendamentoGateway = makeAgendamentoGateway();
const avaliacaoGateway = makeAvaliacaoGateway();
const planoAlimentarGateway = makePlanoAlimentarGateway();
const metasGateway = makeMetasGateway();
const pacienteGateway = makePacienteGateway();

export {
    agendamentoGateway,
    avaliacaoGateway,
    planoAlimentarGateway,
    metasGateway,
    pacienteGateway
};
