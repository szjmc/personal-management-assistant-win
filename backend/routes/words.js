const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticate } = require('../auth');

// 获取单词
router.get('/', authenticate, (req, res) => {
  db.all('SELECT * FROM words WHERE user_id = ?', [req.user.id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 添加单词
router.post('/', authenticate, (req, res) => {
  const { word, definition, example } = req.body;
  db.run(
    `INSERT INTO words (word, definition, example, user_id)
     VALUES (?, ?, ?, ?)`,
    [word, definition, example, req.user.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// 删除单词
router.delete('/:id', authenticate, (req, res) => {
  db.run('DELETE FROM words WHERE id = ? AND user_id = ?', [req.params.id, req.user.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

module.exports = router;