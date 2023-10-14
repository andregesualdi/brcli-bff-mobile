import express from "express";
import agendamento from "./agendamento.route.js";
import avaliacao from "./avaliacao.route.js";
import plano from "./plano-alimentar.route.js";
import metas from "./metas.route.js";
import paciente from "./paciente.route.js";

const router = express.Router();

router.use(agendamento);
router.use(avaliacao);
router.use(plano);
router.use(metas);
router.use(paciente);

export default router;
