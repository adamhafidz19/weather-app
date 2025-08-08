const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

// Serve static files (HTML, CSS, images, JS) from 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
