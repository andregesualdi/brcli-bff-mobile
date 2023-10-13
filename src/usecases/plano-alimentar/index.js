import { planoAlimentarGateway } from "../../gateways/index.js";
import makeGetPlanoAlimentar from "./getPlanoAlimentar.js";

const getPlanoAlimentar = makeGetPlanoAlimentar(planoAlimentarGateway);

const planoAlimentarService = Object.freeze({
    getPlanoAlimentar
});

export default planoAlimentarService;

export {
    getPlanoAlimentar
};