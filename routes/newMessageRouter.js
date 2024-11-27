const {Router} = require('express');
const router = Router();
const messages = require('./indexRouter').messages;

router.get("/", (req, res) => {
    res.render('form', { title: "Form"});
})

router.post("/", (req, res) => {
    const user = req.body.username;
    const text = req.body.messageText;
    messages.push({user, text, added: new Date()});
    res.redirect("/");
    
})

module.exports = router;