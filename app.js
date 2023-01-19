const http = require('http');

//req, incoming request, method 
//response - sending back
const server = http.createServer((req,res)=> {
    if (req.url === '/') {
        res.end('Welcome to our homepagez')
    }

    if (req.url === '/about') {
        res.end('About')
    }

    
    res.write('<h1>this is error message</h1>')
    res.write('<a href="/">Oops2</a>')
    res.end()
    
   
});

server.listen(5000);


