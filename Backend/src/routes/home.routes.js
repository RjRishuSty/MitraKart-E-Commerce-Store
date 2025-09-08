const express = require("express");
const router = express.Router();

const handlerHome = require("../controllers/home.controller");

router.get('/',handlerHome);

module.exports= router;