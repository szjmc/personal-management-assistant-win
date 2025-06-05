import { QuestionIcon } from "./Icon";

export default function QuestionImporter() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <QuestionIcon className="w-8 h-8 text-orange-600" />
          <h2 className="text-2xl font-semibold">考试题库</h2>
        </div>
        <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
          导入题库
        </button>
      </div>

      {/* 新增文件上传区域 */}
      <div className="bg-white rounded shadow p-4 mb-4">
        <div className="flex items-center gap-3">
          <QuestionIcon className="w-6 h-6 text-orange-600" />
          <div>
            <div className="text-base font-medium mb-1">Excel 文件导入示例</div>
            <div className="text-sm text-gray-600">支持 CSV/TXT/JSON 格式</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow hover:bg-gray-50 transition">
          <div className="flex items-center mb-2">
            <QuestionIcon className="w-4 h-4 text-orange-600" />
            <span className="text-sm ml-2">单选题</span>
          </div>
          <div className="text-gray-800">Python 的创始人是？</div>
        </div>
      </div>
    </div>
  );
}