import { getPlanoAlimentar } from "../../usecases/plano-alimentar/index.js";

export default Object.freeze({
    getPlanoAlimentar: (httpRequest) => getPlanoAlimentar(httpRequest)
});
