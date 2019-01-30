const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        console.log(body);
        res.end('ok');
    });
    }
    else {
      res.end(`
        <!doctype html>
       <html><head><title>Login Page:/</title>
</head><body>
<h2>Login Here/</h2>
<hr>
<ul>
<li><a href="https://github.com/login/oauth/authorize?client_id=18ff35b956a25b684c7c">login</a></li>
</ul>
<hr>
      `);
    }
});
server.listen(1213);