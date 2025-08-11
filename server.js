import express from "express";

const app = express();
const PORT = 3000;

// Serve a simple HTML page
app.get("/", (req, res) => {
  res.send("<!DOCTYPE html>" +
           "<html>" +
           "<head>" +
           "  <title>Real Website Sample</title>" +
           "</head>" +
           "<body>" +
           "  <h1>Welcome to the Real Website Sample</h1>" +
           "  <p>This page is served by a local Express server.</p>" +
           "  <h1>Another Heading</h1>" +
           "  <div>" +
           "    <h1>Nested Heading</h1>" +
           "  </div>" +
           "</body>" +
           "</html>");
});

app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
