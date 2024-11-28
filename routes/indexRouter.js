const { Router } = require("express");
const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get("/:messageId", (req, res) => {
  const {messageId} = req.params;
  const index = messageId - 1;
  if (messages[index]) {
    res.render('message', {title: "Message", message: messages[index]});
  } else{
    res.redirect("/");
  }
})

module.exports = {router, messages};
