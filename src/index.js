const app = require("./app")
const port = process.env.port || 3000

app.listen(port, () =>
    console.log("Aplikacja została uruchomiona na porcie 3ooo")
)