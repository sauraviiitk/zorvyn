import express from "express";
import authRoutes from "./routes/auth.routes.js";
import recordRoutes from "./routes/record.routes.js";

const app=express();
app.use(express.json());
import cors from "cors";

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use("/api/auth",authRoutes);
app.use("/api/records",recordRoutes);
export default app;