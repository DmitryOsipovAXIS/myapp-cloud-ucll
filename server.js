const http = require("http");
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("ok");
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ app: "myapp", path: req.url }));
}).listen(port, () => console.log("listening on", port)); 



