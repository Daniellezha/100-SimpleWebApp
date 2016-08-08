const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const body = "Simple Web App demo - v2";
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<html><body>${ body}</body></html>`);
});

server.listen(port);
