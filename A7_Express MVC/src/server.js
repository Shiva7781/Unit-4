const app = require("./index");

const connect = require("./configs/db");


app.listen(4321, async () => {
    try {
      await connect();
    } catch (err) {
      console.log(err);
    }
  
    console.log("listening on port 4321")
  });
  