import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getAddressFromCEP, getEnrollmentByUser, postCreateOrUpdateEnrollment } from "@/controllers";
import { createEnrollmentSchema } from "@/schemas";

const enrollmentsRouter = Router();

enrollmentsRouter
  .get("/cep", getAddressFromCEP)
  .all("/*", authenticateToken)
  .get("/", getEnrollmentByUser)
  .post("/", validateBody(createEnrollmentSchema), postCreateOrUpdateEnrollment);

export { enrollmentsRouter };
