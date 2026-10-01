const http = require("http");
const assert = require("assert");

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("test-response");
});

server.listen(PORT, () => {
  http.get(`http://localhost:${PORT}`, (res) => {
    let data = "";

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(data, "test-response");

        console.log("Test passed!");
        server.close();
      } catch (error) {
        console.error("Test failed!");
        console.error(error);
        server.close();
        process.exit(1);
      }
    });
  });
});
