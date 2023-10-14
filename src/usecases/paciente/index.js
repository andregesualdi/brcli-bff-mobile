import { pacienteGateway } from "../../gateways/index.js";
import makeGetPaciente from "./getPaciente.js";
import makeUpdateImagem from "./updateImagemPaciente.js";

const getPaciente = makeGetPaciente(pacienteGateway);
const updateImagem = makeUpdateImagem(pacienteGateway);

const pacienteService = Object.freeze({
    getPaciente,
    updateImagem
});

export default pacienteService;

export {
    getPaciente,
    updateImagem
};
