import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ITDesk API funcionando!");
});
app.post("/tickets", (req, res) => {
  if (!req.body.titulo?.trim() || !req.body.descricao?.trim()) {
    return res
      .status(400)
      .json({ error: "Título e descrição são obrigatórios" });
  }

  res.json(req.body);
});
export default app;
