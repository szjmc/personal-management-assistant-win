import { 
    TaskIcon, 
    ScheduleIcon, 
    NoteIcon, 
    QuestionIcon, 
    WordIcon 
  } from "../Icon";
  
  export default function Sidebar({ activeTab, onChange }) {
    return (
      <nav className="bg-white rounded shadow p-4">
        <button 
          className={`flex items-center p-3 rounded mb-2 
            ${activeTab === "tasks" && "bg-blue-100"}`}
          onClick={() => onChange("tasks")}
        >
          <TaskIcon className="w-6 h-6 mr-2" />
          <span>任务管理</span>
        </button>
  
        <button 
          className={`flex items-center p-3 rounded mb-2 
            ${activeTab === "schedule" && "bg-green-100"}`}
          onClick={() => onChange("schedule")}
        >
          <ScheduleIcon className="w-6 h-6 mr-2" />
          <span>时间规划</span>
        </button>
  
        <button 
          className={`flex items-center p-3 rounded mb-2 
            ${activeTab === "notes" && "bg-purple-100"}`}
          onClick={() => onChange("notes")}
        >
          <NoteIcon className="w-6 h-6 mr-2" />
          <span>运维笔记</span>
        </button>
  
        <button 
          className={`flex items-center p-3 rounded mb-2 
            ${activeTab === "questions" && "bg-orange-100"}`}
          onClick={() => onChange("questions")}
        >
          <QuestionIcon className="w-6 h-6 mr-2" />
          <span>考试题库</span>
        </button>
  
        <button 
          className={`flex items-center p-3 rounded mb-2 
            ${activeTab === "words" && "bg-emerald-100"}`}
          onClick={() => onChange("words")}
        >
          <WordIcon className="w-6 h-6 mr-2" />
          <span>英语单词</span>
        </button>
      </nav>
    );
  }