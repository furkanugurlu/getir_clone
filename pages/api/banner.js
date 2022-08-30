const bannersApi = require('./api/banners.json');

export default function handle(req, res) {
  res.status(200).json(bannersApi);
}
