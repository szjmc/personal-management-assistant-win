import { ScheduleIcon } from "./Icon";
import Card from "./Card";

export default function ScheduleManager() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">时间规划</h2>
        <button 
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          添加日程
        </button>
      </div>

      <Card 
        icon={ScheduleIcon} 
        title="今日日程"
      >
        <div className="text-base mb-2">09:00 - 10:00</div>
        <div className="text-sm text-gray-600">项目会议</div>
      </Card>
    </div>
  );
}