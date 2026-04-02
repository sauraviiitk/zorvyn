import express from "express";
import { checkAuth } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";
import { getRecords,createRecord,deleteRecord,updateRecord} from "../controllers/record.controller.js";
const router=express.Router();
router.post("/create", checkAuth, allowRoles("user","admin","analyst"), createRecord);
router.get("/getrecords", checkAuth, allowRoles("user","admin","analyst"), getRecords);
router.delete("/:id", checkAuth, allowRoles("user","admin"),deleteRecord);
router.put("/:id", checkAuth, allowRoles("user","admin"),updateRecord);


export default router;