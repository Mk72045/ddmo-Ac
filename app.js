const exp = require("express");
const app = exp();

const port = 3000;

app.listen(port, () => {
  console.log(`it is listen by port: ${port}`);
});
