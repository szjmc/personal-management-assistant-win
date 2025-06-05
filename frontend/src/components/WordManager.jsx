import { WordIcon } from "./Icon";
import Card from "./Card";

export default function WordManager() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">英语单词</h2>
        <button 
          className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
        >
          添加单词
        </button>
      </div>

      <Card 
        icon={WordIcon} 
        title="已学单词"
      >
        <div className="text-2xl font-semibold mb-2">abandon</div>
        <div className="text-gray-600">to give up completely</div>
      </Card>
    </div>
  );
}