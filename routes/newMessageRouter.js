const {Router} = require('express');
const router = Router();

router.get("/", (req, res) => {
    res.send("YOU ARE IN NEW MESSAGE ROUTE")
})

module.exports = router;