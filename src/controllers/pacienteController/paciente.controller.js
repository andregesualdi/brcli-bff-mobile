import { getPaciente } from "../../usecases/paciente/index.js";

export default Object.freeze({
    getPaciente: (httpRequest) => getPaciente(httpRequest)
});
