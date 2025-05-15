import React, { useState } from "react";
import ERDiagram from "./components/ERDiagram";
import TableView from "./components/TableView";
import Statistics from "./components/Statistics";
import QueryExamples from "./components/QueryExamples";
import tableData from "./data/tableData";

// 主应用组件
const App = () => {
  const [activeTab, setActiveTab] = useState("er-diagram");
  const [activeTable, setActiveTable] = useState("Owner");

  const renderContent = () => {
    switch (activeTab) {
      case "er-diagram":
        return <ERDiagram />;
      case "tables":
        return (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 p-2 bg-gray-100 rounded-lg">
              {Object.keys(tableData).map((tableName) => (
                <button
                  key={tableName}
                  className={`px-3 py-1 rounded ${
                    activeTable === tableName
                      ? "bg-blue-600 text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveTable(tableName)}
                >
                  {tableName}
                </button>
              ))}
            </div>
            <TableView
              tableName={activeTable}
              columns={tableData[activeTable].columns}
              data={tableData[activeTable].data}
            />
          </div>
        );
      case "statistics":
        return <Statistics />;
      case "query-examples":
        return <QueryExamples />;
      default:
        return <ERDiagram />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        宠物医院数据库可视化
      </h1>

      <div className="mb-6 flex justify-center">
        <div className="inline-flex bg-gray-200 rounded-lg p-1">
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "er-diagram" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => setActiveTab("er-diagram")}
          >
            ER图
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "tables" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => setActiveTab("tables")}
          >
            表格数据
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "statistics" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => setActiveTab("statistics")}
          >
            统计信息
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              activeTab === "query-examples" ? "bg-white shadow-sm" : ""
            }`}
            onClick={() => setActiveTab("query-examples")}
          >
            查询示例
          </button>
        </div>
      </div>

      {/* 系统通知提示 */}
      <div className="mb-4 px-4 py-3 bg-blue-50 border-l-4 border-blue-500 text-blue-700 rounded">
        <div className="flex">
          <div className="py-1">
            <svg
              className="h-6 w-6 text-blue-500 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium">新功能已添加</p>
            <p className="text-sm">
              现在您可以筛选和编辑表格数据了。在"表格数据"标签页中尝试这些功能。
            </p>
            <p className="text-sm mt-1">
              注意：因为这是演示环境，所有修改只保存在当前会话中，刷新页面后将恢复原始数据。
            </p>
          </div>
        </div>
      </div>

      {renderContent()}
    </div>
  );
};

export default App;
