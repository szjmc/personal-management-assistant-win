const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticate } = require('../auth');

// 获取笔记
router.get('/', authenticate, (req, res) => {
  db.all('SELECT * FROM notes WHERE user_id = ?', [req.user.id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 添加笔记
router.post('/', authenticate, (req, res) => {
  const { category, content } = req.body;
  db.run(
    `INSERT INTO notes (category, content, user_id) VALUES (?, ?, ?)`,
    [category, content, req.user.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// 更新笔记
router.put('/:id', authenticate, (req, res) => {
  const { id } = req.params;
  const { category, content } = req.body;
  db.run(
    `UPDATE notes SET category=?, content=?, updated_at=datetime('now')
     WHERE id=? AND user_id=?`,
    [category, content, id, req.user.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ changes: this.changes });
    }
  );
});

// 删除笔记
router.delete('/:id', authenticate, (req, res) => {
  db.run('DELETE FROM notes WHERE id = ? AND user_id = ?', [req.params.id, req.user.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

module.exports = router;