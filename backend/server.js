// IMPORT PACKAGES
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

//SECURITY PACKAGES
import expressMongoSanitize from "express-mongo-sanitize";

// IMPORT FILES
import connectDB from "./config/db.js";

// IMPORT ROUTES FILES
import contactMessageRoutes from "./routes/contactMessageRoutes.js";

//DOT ENV CONFIG
dotenv.config();

// MONGODB CONNECTION
connectDB();

//REST OBJECT
const app = express();

// MIDDLEWARES
app.use(expressMongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//ROUTES
app.use("/api/v1/message", contactMessageRoutes);

//PORT
const PORT = process.env.PORT || 8080;

//LISTEN
app.listen(PORT, () => {
  console.log(
    `Node server Running in ${process.env.DEV_MODE} Mode on port no ${PORT}`
  );
});
