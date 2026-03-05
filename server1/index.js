const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    setTimeout(() => {
        res.send("Slow Server - Port 3000");
    }, 5000);
});

app.listen(PORT, () => {
    console.log(`Server 1 running at http://localhost:${PORT}`);
});
