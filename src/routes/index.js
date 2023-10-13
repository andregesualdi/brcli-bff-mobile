import express from "express";
import agendamento from "./agendamento.route.js";
import avaliacao from "./avaliacao.route.js";
import plano from "./plano-alimentar.route.js";

const router = express.Router();

router.use(agendamento);
router.use(avaliacao);
router.use(plano);

export default router;
