const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticate } = require('../auth');

// 获取题库
router.get('/', authenticate, (req, res) => {
  db.all('SELECT * FROM questions WHERE user_id = ?', [req.user.id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 导入题目
router.post('/', authenticate, (req, res) => {
  const { question, options, answer, type } = req.body;
  db.run(
    `INSERT INTO questions (question, options, answer, type, user_id)
     VALUES (?, ?, ?, ?, ?)`,
    [question, JSON.stringify(options), answer, type, req.user.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;