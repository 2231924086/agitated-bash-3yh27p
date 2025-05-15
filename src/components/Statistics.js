import React from "react";
import tableData from "../data/tableData";

// 定义统计信息组件
const Statistics = () => {
  // 计算各种统计数据
  const petCount = tableData.Pet.data.length;
  const ownerCount = tableData.Owner.data.length;
  const doctorCount = tableData.Doctor.data.length;
  const registrationCount = tableData.Registration.data.length;

  // 根据宠物种类统计
  const petSpeciesCount = {};
  tableData.Pet.data.forEach((pet) => {
    const species = pet[3]; // pet_species
    petSpeciesCount[species] = (petSpeciesCount[species] || 0) + 1;
  });

  // 计算收入总额
  const totalIncome = tableData.Bill.data.reduce(
    (sum, bill) => sum + bill[2],
    0
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">数据库统计信息</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-700">宠物总数</h3>
          <p className="text-3xl font-bold text-blue-800">{petCount}</p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-green-700">主人总数</h3>
          <p className="text-3xl font-bold text-green-800">{ownerCount}</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-purple-700">医生总数</h3>
          <p className="text-3xl font-bold text-purple-800">{doctorCount}</p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-orange-700">挂号总数</h3>
          <p className="text-3xl font-bold text-orange-800">
            {registrationCount}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            宠物种类分布
          </h3>
          <ul className="space-y-2">
            {Object.entries(petSpeciesCount).map(([species, count]) => (
              <li key={species} className="flex justify-between">
                <span className="font-medium">{species}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {count}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-yellow-700 mb-2">
            收入统计
          </h3>
          <p className="text-3xl font-bold text-yellow-800">
            ¥{totalIncome.toFixed(2)}
          </p>
          <p className="text-sm text-gray-600 mt-2">累计账单总额</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
