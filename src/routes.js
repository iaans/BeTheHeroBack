const express = require("express");

const OngController = require("./controllers/OngController.js");
const IncidentController = require("./controllers/IncidentController.js");
const ProfileController = require("./controllers/ProfileController.js");
const SessionController = require("./controllers/SessionController.js");

const routes = express.Router();

//method get
routes.get("/ongs", OngController.index);
routes.get("/incidents", IncidentController.index);
routes.get("/profile", ProfileController.index);

//method post
routes.post("/ongs", OngController.create);
routes.post("/incidents", IncidentController.create);
routes.post("/sessions", SessionController.create);

//method delete
routes.delete("/incidents/:id", IncidentController.delete);
module.exports = routes;
