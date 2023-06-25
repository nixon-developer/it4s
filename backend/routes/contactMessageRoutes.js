// IMPORT PACKAGES
import express from "express";

// IMPORT FILES
import { contactMessageController } from "../controllers/contactMessageController.js";

// ROUTER OBJECT
const router = express.Router();

// ROUTES
// CONTACT MESSAGE
router.route("/contact").post(contactMessageController);

export default router;
