const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticate } = require('../auth');

// 获取日程
router.get('/', authenticate, (req, res) => {
  db.all('SELECT * FROM schedules WHERE user_id = ?', [req.user.id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 添加日程
router.post('/', authenticate, (req, res) => {
  const { title, start, end, recurring } = req.body;
  db.run(
    `INSERT INTO schedules (title, start, end, recurring, user_id)
     VALUES (?, ?, ?, ?, ?)`,
    [title, start, end, recurring, req.user.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// 删除日程
router.delete('/:id', authenticate, (req, res) => {
  db.run('DELETE FROM schedules WHERE id = ? AND user_id = ?', [req.params.id, req.user.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

module.exports = router;