const indexController = require("./indexController.js");

const getForm = (req,res) => {
    res.render('form', { title: "Form"})
}

const createNewMessage = (req,res) => {
    const user = req.body.username;
    const text = req.body.messageText;
    indexController.messages.push({user, text, added: new Date()});
    res.redirect("/");
}

module.exports = {getForm, createNewMessage}