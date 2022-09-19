import { Router } from "express";

const router = Router();

router.get('/campus', (req, res) => res.json('getting campus'))

export default router;