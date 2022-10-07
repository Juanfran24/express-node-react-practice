const express = require("express");
const passport = require("passport");
const { PORT } = require("./config");
const { boomHandler, functionLogErrors, errorHandler } = require('./middlewares');
const { createVersionOne } = require("./routes/v1");
const strategy = require("./strategies/jwt.strategy");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

createVersionOne(app);
app.use(functionLogErrors);
app.use(boomHandler);
app.use(errorHandler);
passport.use(strategy);

app.listen(PORT, () => {
  console.log('He iniciado!');
});

