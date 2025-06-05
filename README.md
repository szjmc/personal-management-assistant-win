# Personal Management Assistant

一个完整的个人综合管理助手系统，支持以下功能模块：
- 任务管理（看板视图、拖拽排序、优先级标记）
- 时间规划（日历视图、甘特图、提醒通知）
- 运维笔记（Markdown 编辑器、分类管理）
- 考试题库导入（CSV/TXT 支持、练习模式）
- 英语单词学习（记忆卡片、拼写测试、复习算法）

✅ 技术栈：
- 前端：React + Vite + TailwindCSS
- 后端：Node.js + Express + SQLite
- 桌面应用：Electron + electron-builder
- 数据持久化：本地 SQLite 数据库
- 用户权限：JWT Token 认证

---

## 📦 安装说明

1. 下载 ZIP 包并解压到任意目录。
2. 打开 `dist/` 文件夹。
3. 双击运行 `personal-management-assistant Setup 1.0.0.exe`。
4. 按照提示完成安装。
5. 安装完成后桌面会生成快捷方式。

---

## 💻 使用说明

- 首次运行会自动生成 SQLite 数据库文件（位于安装目录下）。
- 所有数据（任务、笔记、单词等）都保存在本地，无需联网。
- 支持注册登录系统，每个用户的数据相互隔离。
- 提供锁机制防止多人并发编辑冲突。

---

## 🔒 数据安全与隐私

- 所有数据仅存储在本地，不会上传至服务器。
- SQLite 数据库存储路径为安装目录下的 `database.db`。
- 不依赖网络即可使用全部功能。

---

## 🧩 模块说明

| 模块 | 功能 |
|------|------|
| 任务管理 | 看板式任务管理、状态切换、进度条、标签、优先级、搜索筛选 |
| 时间规划 | 日历视图、甘特图、重复事件、提醒通知 |
| 运维笔记 | Markdown 富文本编辑、分类管理、版本历史 |
| 考试题库 | CSV/TXT 导入、题目解析、练习模式、错题记录 |
| 英语单词 | 学习计划、记忆卡片、拼写测试、复习算法 |

---

## 🗑️ 卸载方式

- 在 Windows 控制面板中找到 "Personal Management Assistant" 并卸载。
- 或者运行安装目录下的 `uninstaller.exe`。

---

## 📞 技术支持

如有任何问题，请联系：
📧 support@yourdomain.com  
🔗 https://github.com/yourname/personal-management-assistant 