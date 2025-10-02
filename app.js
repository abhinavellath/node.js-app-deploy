require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


function checkBasicAuth(req) {
const auth = req.headers['authorization'];
if (!auth || !auth.startsWith('Basic ')) return false;
const b64 = auth.split(' ')[1] || '';
const str = Buffer.from(b64, 'base64').toString(); // "username:password"
const idx = str.indexOf(':');
if (idx === -1) return false;
const username = str.slice(0, idx);
const password = str.slice(idx + 1);
return (
username === process.env.USERNAME &&
password === process.env.PASSWORD
);
}


app.get('/', (req, res) => {
res.send('Hello, world!');
});


app.get('/secret', (req, res) => {
if (!checkBasicAuth(req)) {
res.set('WWW-Authenticate', 'Basic realm="Protected Area"');
return res.status(401).send('Authentication required.');
}
res.send(process.env.SECRET_MESSAGE || 'No secret set.');
});


app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});
