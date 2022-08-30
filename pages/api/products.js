const productsApi = require('./api/products.json');

export default function handle(req, res) {
  res.status(200).json(productsApi);
}
