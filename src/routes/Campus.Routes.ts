import { Router } from "express";
import { gettAllCampus, createCampus } from "../controllers/CampusController";

const router = Router();

router.get('/api/campus/get-all-campus', gettAllCampus);
router.post('/api/campus/create-campus', createCampus);

export default router;