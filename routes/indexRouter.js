const { Router } = require("express");
const router = Router();
const indexController = require("../controllers/indexController.js")

router.get("/", indexController.indexHome);

router.get("/:messageId", indexController.indexMessage)

module.exports = router;
