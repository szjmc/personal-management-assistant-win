// 新增公共头部组件
import { TaskIcon } from "../Icon";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TaskIcon className="w-8 h-8" />
          <h1 className="text-3xl font-bold">个人管理助手</h1>
        </div>
        <button 
          className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-100 transition"
          onClick={() => alert("功能开发中...")}
        >
          设置
        </button>
      </div>
    </header>
  );
}