const {Router} = require('express');
const router = Router();

router.get("/", (req, res) => {
    res.send("YOU ARE IN INDEX ROUTE")
})

module.exports = router;
