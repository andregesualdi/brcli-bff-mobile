import { pacienteGateway } from "../../gateways/index.js";
import makeGetPaciente from "./getPaciente.js";

const getPaciente = makeGetPaciente(pacienteGateway);

const pacienteService = Object.freeze({
    getPaciente
});

export default pacienteService;

export {
    getPaciente
};
