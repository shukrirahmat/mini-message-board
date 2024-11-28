const {Router} = require('express');
const router = Router();
const newMessageController = require("../controllers/newMessageController.js");

router.get("/", newMessageController.getForm)

router.post("/", newMessageController.createNewMessage)

module.exports = router;