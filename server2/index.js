const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
    res.send("Fast Server - Port 3001");
});

app.listen(PORT, () => {
    console.log(`Server 2 running at http://localhost:${PORT}`);
});
