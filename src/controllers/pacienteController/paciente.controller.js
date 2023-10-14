import { getPaciente, updateImagem } from "../../usecases/paciente/index.js";

export default Object.freeze({
    getPaciente: (httpRequest) => getPaciente(httpRequest),
    updateImagem: (httpRequest) => updateImagem(httpRequest)
});
