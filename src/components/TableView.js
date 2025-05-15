import React, { useState, useEffect } from "react";
import EditableCell from "./EditableCell";

// 定义表格组件
const TableView = ({ tableName, columns, data: initialData }) => {
  // 状态变量
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [editingCell, setEditingCell] = useState({
    rowIndex: null,
    columnIndex: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [isAddingRow, setIsAddingRow] = useState(false);
  const [newRow, setNewRow] = useState(Array(columns.length).fill(""));
  const [errorMessage, setErrorMessage] = useState("");

  // 筛选功能
  const applyFilters = () => {
    let result = [...data];

    // 应用文本搜索筛选
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((row) =>
        row.some(
          (cell) =>
            cell !== null && cell.toString().toLowerCase().includes(query)
        )
      );
    }

    // 应用列筛选
    Object.entries(filters).forEach(([columnIndex, filterValue]) => {
      if (filterValue) {
        const index = parseInt(columnIndex);
        result = result.filter(
          (row) =>
            row[index] !== null &&
            row[index]
              .toString()
              .toLowerCase()
              .includes(filterValue.toLowerCase())
        );
      }
    });

    setFilteredData(result);
  };

  // 当筛选条件改变时更新结果
  useEffect(() => {
    applyFilters();
  }, [searchQuery, filters, data]);

  // 处理单元格编辑
  const handleCellEdit = (rowIndex, columnIndex, value) => {
    const newData = [...data];
    newData[rowIndex][columnIndex] = value;
    setData(newData);
  };

  // 开始编辑单元格
  const startEditing = (rowIndex, columnIndex) => {
    setEditingCell({ rowIndex, columnIndex });
  };

  // 停止编辑单元格
  const stopEditing = () => {
    setEditingCell({ rowIndex: null, columnIndex: null });
  };

  // 添加新行
  const addRow = () => {
    // 验证必填字段
    if (newRow[0] === "") {
      setErrorMessage(`${columns[0]} 不能为空`);
      return;
    }

    // 检查ID是否已存在（假设第一列是ID）
    if (data.some((row) => row[0] === newRow[0])) {
      setErrorMessage(`${columns[0]} '${newRow[0]}' 已存在`);
      return;
    }

    // 添加新行
    setData([...data, [...newRow]]);
    setNewRow(Array(columns.length).fill(""));
    setIsAddingRow(false);
    setErrorMessage("");
  };

  // 删除行
  const deleteRow = (rowIndex) => {
    if (window.confirm("确定要删除这条记录吗？")) {
      const newData = [...data];
      newData.splice(rowIndex, 1);
      setData(newData);
    }
  };

  // 更新新行的值
  const updateNewRowValue = (columnIndex, value) => {
    const updatedRow = [...newRow];
    updatedRow[columnIndex] = value;
    setNewRow(updatedRow);
  };

  // 确定列类型
  const getColumnType = (columnName, columnIndex) => {
    // 确保columnName是字符串
    const colName = columnName ? columnName.toString().toLowerCase() : "";

    // 根据列名或数据类型判断
    if (colName.includes("date") || colName.includes("time")) {
      return "date";
    }
    if (
      colName.includes("fee") ||
      colName.includes("price") ||
      colName.includes("amount")
    ) {
      return "number";
    }
    // 检查数据类型
    if (data.length > 0 && typeof data[0][columnIndex] === "number") {
      return "number";
    }
    return "text";
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">{tableName}</h2>

      {/* 搜索和筛选区域 */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <input
            type="text"
            placeholder="搜索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setSearchQuery("")}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            清除
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          {columns.map((column, index) => (
            <div key={index} className="flex items-center">
              <input
                type="text"
                placeholder={`筛选 ${column}`}
                value={filters[index] || ""}
                onChange={(e) => {
                  const newFilters = { ...filters };
                  if (e.target.value) {
                    newFilters[index] = e.target.value;
                  } else {
                    delete newFilters[index];
                  }
                  setFilters(newFilters);
                }}
                className="w-32 px-2 py-1 text-sm border border-gray-300 rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 错误信息显示 */}
      {errorMessage && (
        <div className="mb-3 p-2 bg-red-100 text-red-700 rounded-md">
          {errorMessage}
        </div>
      )}

      {/* 数据操作按钮 */}
      <div className="flex justify-between mb-4">
        <div>
          <button
            onClick={() => setIsAddingRow(!isAddingRow)}
            className="px-3 py-1 bg-green-600 text-white rounded-md mr-2 hover:bg-green-700"
          >
            {isAddingRow ? "取消添加" : "添加记录"}
          </button>
        </div>
        <div>
          <span className="text-sm text-gray-500">
            显示 {filteredData.length} 条，共 {data.length} 条记录
          </span>
        </div>
      </div>

      {/* 表格区域 */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-left"
                >
                  {column}
                </th>
              ))}
              <th className="border border-gray-300 px-4 py-2 text-center">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 添加新记录的行 */}
            {isAddingRow && (
              <tr className="bg-blue-50">
                {newRow.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 px-4 py-2"
                  >
                    <EditableCell
                      value={cell}
                      isEditing={true}
                      onChange={(value) => updateNewRowValue(cellIndex, value)}
                      columnType={getColumnType(columns[cellIndex], cellIndex)}
                    />
                  </td>
                ))}
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={addRow}
                    className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    保存
                  </button>
                </td>
              </tr>
            )}

            {/* 数据行 */}
            {filteredData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                {/* 确保正确渲染每一列的数据 */}
                {columns.map((column, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 px-4 py-2"
                    onClick={() => startEditing(rowIndex, cellIndex)}
                  >
                    <EditableCell
                      value={row[cellIndex]}
                      isEditing={
                        editingCell.rowIndex === rowIndex &&
                        editingCell.columnIndex === cellIndex
                      }
                      onChange={(value) =>
                        handleCellEdit(rowIndex, cellIndex, value)
                      }
                      columnType={getColumnType(column, cellIndex)}
                    />
                  </td>
                ))}
                {/* 确保操作列单独渲染，且位于最后一列 */}
                <td className="border border-gray-300 px-2 py-2 text-center">
                  <button
                    onClick={() => deleteRow(rowIndex)}
                    className="px-2 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700"
                  >
                    删除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 点击页面任何地方停止编辑 */}
      {editingCell.rowIndex !== null && (
        <div
          className="fixed inset-0 z-10 bg-transparent"
          onClick={stopEditing}
        />
      )}
    </div>
  );
};

export default TableView;
