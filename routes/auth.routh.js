import express from "express";
import {login,register} from "../controllers/auth.controller.js"
import {body} from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultsExpress.js";
const router = express.Router()


router.put('/login',login);

router.post(
    "/register",
    [
        body("name","debe insertar un name")
            .notEmpty()
            .trim(),
        body("lastname")
            .notEmpty()
            .trim(),

        body("date")
    ],
    validationResultExpress,
    register
    );

export default router;