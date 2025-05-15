import React from "react";
import tableData from "../data/tableData";

// 定义查询示例组件
const QueryExamples = () => {
  // 查询1: 某宠物的所有健康记录
  const petRecords = () => {
    const petId = "P001";
    const petName = tableData.Pet.data.find((pet) => pet[0] === petId)[2];
    const records = tableData.Record.data.filter(
      (record) => record[1] === petId
    );

    return (
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">
          宠物"{petName}"的健康记录
        </h3>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">诊疗ID</th>
              <th className="border border-gray-300 px-4 py-2">医生</th>
              <th className="border border-gray-300 px-4 py-2">症状</th>
              <th className="border border-gray-300 px-4 py-2">诊断</th>
              <th className="border border-gray-300 px-4 py-2">建议</th>
              <th className="border border-gray-300 px-4 py-2">就诊时间</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => {
              const doctorId = record[2];
              const doctorName = tableData.Doctor.data.find(
                (doctor) => doctor[0] === doctorId
              )[1];

              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {record[0]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {doctorName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {record[3]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {record[4]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {record[5]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {record[6]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  // 查询2: 某医生的所有患者
  const doctorPatients = () => {
    const doctorId = "D001";
    const doctorName = tableData.Doctor.data.find(
      (doctor) => doctor[0] === doctorId
    )[1];
    const records = tableData.Record.data.filter(
      (record) => record[2] === doctorId
    );
    const petIds = [...new Set(records.map((record) => record[1]))]; // 去重
    const pets = petIds.map((petId) => {
      const pet = tableData.Pet.data.find((p) => p[0] === petId);
      const ownerId = pet[1];
      const owner = tableData.Owner.data.find((o) => o[0] === ownerId);

      return {
        petId: pet[0],
        petName: pet[2],
        species: pet[3],
        breed: pet[4],
        ownerName: owner[1],
      };
    });

    return (
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">{doctorName}的患者列表</h3>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">宠物ID</th>
              <th className="border border-gray-300 px-4 py-2">宠物名称</th>
              <th className="border border-gray-300 px-4 py-2">种类</th>
              <th className="border border-gray-300 px-4 py-2">品种</th>
              <th className="border border-gray-300 px-4 py-2">主人</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {pet.petId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {pet.petName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {pet.species}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {pet.breed}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {pet.ownerName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // 查询3: 库存不足的药品
  const lowStockMedicines = () => {
    const threshold = 30; // 设定库存阈值
    const lowStock = tableData.Storage.data
      .filter((storage) => storage[4] <= threshold)
      .map((storage) => {
        const medicineId = storage[1];
        const medicine = tableData.Medicine.data.find(
          (m) => m[0] === medicineId
        );

        return {
          storageId: storage[0],
          medicineId: medicineId,
          medicineName: medicine[1],
          location: storage[2],
          quantity: storage[4],
        };
      });

    return (
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">
          库存不足的药品 (≤ {threshold})
        </h3>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">库存ID</th>
              <th className="border border-gray-300 px-4 py-2">药品ID</th>
              <th className="border border-gray-300 px-4 py-2">药品名称</th>
              <th className="border border-gray-300 px-4 py-2">存储位置</th>
              <th className="border border-gray-300 px-4 py-2">数量</th>
            </tr>
          </thead>
          <tbody>
            {lowStock.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {item.storageId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.medicineId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.medicineName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.location}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">
                  {item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-6">查询示例</h2>

      {petRecords()}
      {doctorPatients()}
      {lowStockMedicines()}
    </div>
  );
};

export default QueryExamples;
