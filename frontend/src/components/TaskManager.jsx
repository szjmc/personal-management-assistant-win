import Card from "./Card";
import { TaskIcon } from "./Icon";

export default function TaskManager() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">任务看板</h2>
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          添加任务
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card 
          icon={TaskIcon} 
          title="待办任务"
        >
          <div className="text-base mb-2">开发登录系统</div>
          <progress 
            value="30" 
            max="100" 
            className="h-2 rounded mb-2" 
            style={{ 
              backgroundColor: "#FDE68A", 
              "&::-webkit-progress-bar": { backgroundColor: "#FDE68A" },
              "&::-webkit-progress-value": { backgroundColor: "#FACC15" }
            }}
          ></progress>
        </Card>
      </div>
    </div>
  );
}