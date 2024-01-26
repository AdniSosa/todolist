import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const tareas = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("app"));



app.get("/", (req, res) => {
  res.render("index.ejs");

});

app.post('/submit', (req, res) => {
  const viajeS = req.body.viaje;
  tareas.push(viajeS);
  res.render("index.ejs", { viajeTareas: tareas });;
  res.redirect("/");
  
  
});





app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
