import express from "express";
import { checkAuth } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";
import { getRecords,createRecord } from "../controllers/record.controller.js";
const router=express.Router();
router.post("/", checkAuth, allowRoles("user","admin","analyst"), createRecord);
router.get("/getrecords", checkAuth, allowRoles("user","admin","analyst"), getRecords);
export default router;