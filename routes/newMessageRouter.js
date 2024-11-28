const {Router} = require('express');
const router = Router();
const indexRouter = require('./indexRouter');

router.get("/", (req, res) => {
    res.render('form', { title: "Form"});
})

router.post("/", (req, res) => {
    const user = req.body.username;
    const text = req.body.messageText;
    indexRouter.messages.push({user, text, added: new Date()});
    res.redirect("/");
    
})

module.exports = router;