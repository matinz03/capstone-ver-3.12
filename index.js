import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "yourSecretKey", // replace with a secure secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // For development, secure should be false. For production, it should be true when using HTTPS.
  })
);
app.use((req, res, next) => {
  res.locals.user = req.session.user || ""; // Pass visitor name to all views
  next();
});
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/proceed", (req, res) => {
  const user = req.body.name;
  req.session.user = user; // Store the name in the session
  res.redirect("/home"); // Redirect to the next page or wherever needed
});
app.get("/home", (req, res) => {
  res.render("home.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/pig", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pig", "index.html"));
});
app.get("/guess", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "guess", "index.html"));
});
app.get("/simon", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "simon", "index.html"));
});
app.get("/tindog", (req, res) => {
 res.sendFile(path.join(__dirname, "public", "tin", "index.html"));
});
app.get("/projects", (req, res) => {
  res.render("projects.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
