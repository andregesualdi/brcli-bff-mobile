import { avaliacaoGateway } from "../../gateways/index.js";
import makeGetAvaliacao from "./getAvaliacao.js";

const getAvaliacao = makeGetAvaliacao(avaliacaoGateway);

const avaliacaoService = Object.freeze({
    getAvaliacao
});

export default avaliacaoService;

export {
    getAvaliacao
};
