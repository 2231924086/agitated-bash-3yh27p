import React from "react";

// 定义可编辑单元格组件
const EditableCell = ({ value, isEditing, onChange, columnType }) => {
  if (!isEditing) {
    return <span>{value != null ? value.toString() : ""}</span>;
  }

  // 根据列类型选择合适的输入控件
  if (columnType && columnType.includes("date")) {
    return (
      <input
        type="date"
        value={value ? value.split(" ")[0] : ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-2 py-1 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  } else if (columnType === "number" || typeof value === "number") {
    return (
      <input
        type="number"
        value={value !== null ? value : ""}
        onChange={(e) =>
          onChange(e.target.value === "" ? null : Number(e.target.value))
        }
        className="w-full px-2 py-1 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  } else {
    return (
      <input
        type="text"
        value={value !== null ? value : ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-2 py-1 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  }
};

export default EditableCell;
