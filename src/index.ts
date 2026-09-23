import express from "express";
import router from "./route/subjects.js";
import cors from 'cors'

const app = express();
const PORT = 8000;
app.use(cors({
  origin:process.env.FRONTEND_URL,
  methods:['GET','POST','PUT','DELETE'],
  credentials: true

}))

app.use(express.json());

app.use('/api/subjects',router)

app.get("/", (_req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
