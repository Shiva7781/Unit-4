const app = require("./index.js");
const connect = require("./configs/db.js")

app.listen(4123, async () => {
    try {
        await connect();
        console.log("listening on port 4123");
    } catch (err) {
        console.log("Something went wring")
    }

})