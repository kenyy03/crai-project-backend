import { Router } from "express";
import { gettAllCampus, createCampus } from "../controllers/CampusController";

const router = Router();

router.get('/campus/get-all-campus', gettAllCampus);
router.post('/campus/create-campus', createCampus);

export default router;