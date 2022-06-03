const app = require('express')()
const proxy = require('express-http-proxy');
var cors = require('cors')
const host = '127.0.0.1';
const port = 7000;

app.use(cors({ origin: true }))

app.use('/', proxy('https://akitacloud-public-api.azurewebsites.net',));

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`)
  });
  
// const http = require('http');

// function onRequest(req, res) {
//     console.log('serve: ' + req.url);
  
//     const options = {
//       hostname: '127.0.0.1',
//       port: 7000,
//       path: req.url,
//       method: req.method,
//       headers: {
//         ...req.headers,
//         "Access-Control-Allow-Origin": "*"
//       }
//     };
  
//     const proxy = http.request(options, function (r) {
//       res.writeHead(r.statusCode, r.headers);
//       r.pipe(res, {
//         end: true
//       });
//     });
  
//     req.pipe(proxy, {
//       end: true
//     });
//   }
  
//   http.createServer(onRequest).listen(7000);
//   console.log('Listening on port 9001')