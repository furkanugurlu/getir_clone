const categoriesApi = require('./api/categories.json');

export default function handle(req, res) {
  res.status(200).json(categoriesApi);
}
