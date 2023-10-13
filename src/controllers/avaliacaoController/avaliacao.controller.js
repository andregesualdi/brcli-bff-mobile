import { getAvaliacao } from "../../usecases/avaliacao/index.js";

export default Object.freeze({
    getAvaliacao: (httpRequest) => getAvaliacao(httpRequest)
});
