import express from "express";
import { register,login } from "../controllers/auth.controllers.js";
import { checkAuth } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";
const Router=express.Router();
Router.post('/register',register);
Router.post('/login',login);
Router.get(
  "/admin-only",
  checkAuth,
  allowRoles("analyst", "admin"),
  (req, res) => {
    res.json({ msg: "Welcome Admin" });
  }
);
export default Router;