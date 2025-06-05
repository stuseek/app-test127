const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    
    if (parsedUrl.pathname === '/api/health') {
        res.writeHead(200);
        res.end(JSON.stringify({ status: 'healthy', message: 'Backend is running' }));
    } else if (parsedUrl.pathname === '/') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Application Backend API' }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});