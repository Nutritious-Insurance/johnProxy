const express = require('express');
const request = require('request');

const app = express();
const port = 3000;
const philipPort = 1729;
const johnPort = 3001;
const javPort = 3002;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/product/:productId', express.static('public', { index: 'productPage.html' }));
app.use('/product/:productName/:productId', (req, res) => {
  res.redirect(`/product/${req.params.productId}`);
});

app.use(/\/api\/productPreview\/.*/, (req, res) => {
  request(`${req.protocol}://localhost:${philipPort}${req.originalUrl}`).pipe(res);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
