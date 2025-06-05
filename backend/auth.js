const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key';

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: '未提供令牌' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ error: '无效令牌' });
  }
}

module.exports = { authenticate };