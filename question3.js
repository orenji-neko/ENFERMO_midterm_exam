import Express from "express";

// globals
const port = 3000;

// main app instance
const app = Express();

// routes
app.get("/test", (req, res) => {
  res.status(200).json({ message: "Express is working! Mark Jess Anthony Enfermo" })
});

// listen
app.listen(port, () => console.log(`Running on port ${port}`));