import { NoteIcon } from "./Icon";
import Card from "./Card";

export default function NoteManager() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">运维笔记</h2>
        <button 
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          新建笔记
        </button>
      </div>

      <Card 
        icon={NoteIcon} 
        title="Linux 配置"
      >
        <div className="text-base mb-2">使用 `tar` 命令打包文件...</div>
      </Card>
    </div>
  );
}