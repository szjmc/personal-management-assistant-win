import { useState } from "react";
import { 
  TaskIcon, 
  ScheduleIcon, 
  NoteIcon, 
  QuestionIcon, 
  WordIcon 
} from "./components/Icon";

// 导入公共布局组件
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";

// 导入业务组件
import TaskManager from "./components/TaskManager";
import ScheduleManager from "./components/ScheduleManager";
import NoteManager from "./components/NoteManager";
import QuestionImporter from "./components/QuestionImporter";
import WordManager from "./components/WordManager";

export default function App() {
  const [activeTab, setActiveTab] = useState("tasks");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4">
        <Sidebar 
          activeTab={activeTab} 
          onChange={setActiveTab} 
        />

        <main className="bg-white rounded shadow p-6">
          {activeTab === "tasks" && <TaskManager />}
          {activeTab === "schedule" && <ScheduleManager />}
          {activeTab === "notes" && <NoteManager />}
          {activeTab === "questions" && <QuestionImporter />}
          {activeTab === "words" && <WordManager />}
        </main>
      </div>
    </div>
  );
}