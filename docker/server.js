"use strict";

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO CLIENT, NICE TO MEET YOU");
});
app.listen(PORT, HOST);

console.log(`Running on, ${HOST} : ${PORT}`);
