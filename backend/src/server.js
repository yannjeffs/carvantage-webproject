import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173"]
}))

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Listening on port " + PORT)
})
