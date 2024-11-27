const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`);
})