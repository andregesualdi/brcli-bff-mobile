import express from "express";

import pacienteController from "../controllers/pacienteController/paciente.controller.js";

import makeCallback from "./make-callback.js";

const router = express.Router();

router.route("/paciente").get(makeCallback(pacienteController.getPaciente));
router.route("/paciente").put(makeCallback(pacienteController.updateImagem));

export default router;
