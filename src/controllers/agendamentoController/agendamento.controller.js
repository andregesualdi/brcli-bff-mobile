import { getAgendamento } from "../../usecases/agendamento/index.js";

export default Object.freeze({
    getAgendamento: (httpRequest) => getAgendamento(httpRequest)
});
