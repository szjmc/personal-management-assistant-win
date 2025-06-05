const express = require('express');
const router = express.Router();
const db = require('../db');
const { authenticate } = require('../auth');

// 获取当前用户的所有任务
router.get('/', authenticate, (req, res) => {
  db.all('SELECT * FROM tasks WHERE user_id = ?', [req.user.id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 添加新任务
router.post('/', authenticate, (req, res) => {
  const { title, description, status, tags, due, priority, progress } = req.body;
  db.run(
    `INSERT INTO tasks (title, description, status, tags, due, priority, progress, user_id)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [title, description, status, tags, due, priority, progress, req.user.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// 更新任务
router.put('/:id', authenticate, (req, res) => {
  const { id } = req.params;
  const { title, description, status, tags, due, priority, progress } = req.body;

  db.get('SELECT * FROM locks WHERE resource_type = ?', [`task:${id}`], (err, row) => {
    if (row && row.locked_by !== req.user.id.toString()) {
      return res.status(409).json({ error: '该任务正在被其他用户编辑' });
    }

    db.run(
      `UPDATE tasks SET title=?, description=?, status=?, tags=?, due=?, priority=?, progress=?
       WHERE id=? AND user_id=?`,
      [title, description, status, tags, due, priority, progress, id, req.user.id],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes });
      }
    );
  });
});

// 删除任务
router.delete('/:id', authenticate, (req, res) => {
  db.run('DELETE FROM tasks WHERE id = ? AND user_id = ?', [req.params.id, req.user.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

// 加锁任务
router.post('/lock/:id', authenticate, (req, res) => {
  const taskId = req.params.id;
  db.get('SELECT * FROM locks WHERE resource_type = ?', [`task:${taskId}`], (err, row) => {
    if (row) {
      return res.status(409).json({ error: '资源已被锁定', lockedBy: row.locked_by });
    }

    db.run(
      `INSERT INTO locks (resource_type, locked_by, locked_at)
       VALUES (?, ?, datetime('now'))`,
      [`task:${taskId}`, req.user.id],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true });
      }
    );
  });
});

// 解锁任务
router.post('/unlock/:id', authenticate, (req, res) => {
  const taskId = req.params.id;
  db.run('DELETE FROM locks WHERE resource_type = ?', [`task:${taskId}`], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ unlocked: this.changes > 0 });
  });
});

module.exports = router;