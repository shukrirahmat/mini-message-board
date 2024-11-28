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

const indexHome = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const indexMessage = (req, res) => {
  const { messageId } = req.params;
  const index = messageId - 1;
  if (messages[index]) {
    res.render("message", { title: "Message", message: messages[index] });
  } else {
    res.redirect("/");
  }
};

module.exports = {indexHome, indexMessage, messages}
