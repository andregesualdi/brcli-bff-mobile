import express from "express";
import agendamento from "./agendamento.route.js";

const router = express.Router();

router.use(agendamento);

export default router;
