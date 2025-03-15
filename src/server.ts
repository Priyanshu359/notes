import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "../config/database";
//import route from "../routes/noteRoutes";
import router from "../routes/noteRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

sequelize.sync({ force: false }).then(() => {
    console.log("Database connected and Synchronized");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});