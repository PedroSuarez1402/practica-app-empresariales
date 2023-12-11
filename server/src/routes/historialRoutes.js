import { Router } from "express";

import { createHistoriaClinica, getHistoriaClinica, getHistoriaClinicaId, updateHistoriaClinica, deleteHistoriaClinica } from "../controllers/historialController";

const router = Router();

router.get('/', getHistoriaClinica);
router.get('/:id', getHistoriaClinicaId);
router.post('/', createHistoriaClinica);
router.put('/:id', updateHistoriaClinica);
router.delete('/:id', deleteHistoriaClinica);

export default router;