import React from "react";

// 定义数据库ER图组件
const ERDiagram = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg overflow-auto">
      <h2 className="text-xl font-bold mb-4">宠物医院数据库 - ER图</h2>
      <svg viewBox="0 0 1000 800" className="border border-gray-300 bg-white">
        {/* 实体框 - Owner */}
        <g transform="translate(50, 50)">
          <rect
            width="180"
            height="140"
            fill="#e3f2fd"
            stroke="#1e88e5"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Owner
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#1e88e5"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            owner_id (PK)
          </text>
          <text x="25" y="80" fontSize="12">
            owner_name
          </text>
          <text x="25" y="100" fontSize="12">
            telephone_number
          </text>
          <text x="25" y="120" fontSize="12">
            owner_age
          </text>
          <text x="25" y="140" fontSize="12">
            owner_address
          </text>
        </g>

        {/* 实体框 - Pet */}
        <g transform="translate(350, 50)">
          <rect
            width="180"
            height="220"
            fill="#e8f5e9"
            stroke="#43a047"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Pet
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#43a047"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            pet_id (PK)
          </text>
          <text x="25" y="80" fontSize="12">
            owner_id (FK)
          </text>
          <text x="25" y="100" fontSize="12">
            pet_name
          </text>
          <text x="25" y="120" fontSize="12">
            pet_species
          </text>
          <text x="25" y="140" fontSize="12">
            pet_breed
          </text>
          <text x="25" y="160" fontSize="12">
            pet_gender
          </text>
          <text x="25" y="180" fontSize="12">
            pet_birthday
          </text>
          <text x="25" y="200" fontSize="12">
            pet_weight
          </text>
          <text x="25" y="220" fontSize="12">
            pet_color
          </text>
        </g>

        {/* 实体框 - Registration */}
        <g transform="translate(650, 50)">
          <rect
            width="180"
            height="120"
            fill="#fff3e0"
            stroke="#ff9800"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Registration
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#ff9800"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            registration_id (PK)
          </text>
          <text x="25" y="80" fontSize="12">
            pet_id (FK)
          </text>
          <text x="25" y="100" fontSize="12">
            registration_time
          </text>
          <text x="25" y="120" fontSize="12">
            fee
          </text>
        </g>

        {/* 实体框 - Doctor */}
        <g transform="translate(50, 250)">
          <rect
            width="180"
            height="140"
            fill="#e8eaf6"
            stroke="#3949ab"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Doctor
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#3949ab"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            doctor_id (PK)
          </text>
          <text x="25" y="80" fontSize="12">
            doctor_name
          </text>
          <text x="25" y="100" fontSize="12">
            doctor_phone
          </text>
          <text x="25" y="120" fontSize="12">
            doctor_email
          </text>
          <text x="25" y="140" fontSize="12">
            hire_date
          </text>
        </g>

        {/* 实体框 - Record */}
        <g transform="translate(350, 330)">
          <rect
            width="180"
            height="160"
            fill="#f3e5f5"
            stroke="#8e24aa"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Record
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#8e24aa"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            record_id (PK)
          </text>
          <text x="25" y="80" fontSize="12">
            pet_id (FK)
          </text>
          <text x="25" y="100" fontSize="12">
            doctor_id (FK)
          </text>
          <text x="25" y="120" fontSize="12">
            symptom
          </text>
          <text x="25" y="140" fontSize="12">
            diagnosis
          </text>
          <text x="25" y="160" fontSize="12">
            suggestion
          </text>
          <text x="25" y="180" fontSize="12">
            visit_time
          </text>
        </g>

        {/* 实体框 - Prescription */}
        <g transform="translate(650, 250)">
          <rect
            width="180"
            height="120"
            fill="#fce4ec"
            stroke="#d81b60"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Prescription
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#d81b60"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            prescription_id (PK)
          </text>
          <text x="25" y="80" fontSize="12">
            record_id (FK)
          </text>
          <text x="25" y="100" fontSize="12">
            prescription_date
          </text>
          <text x="25" y="120" fontSize="12">
            prescription_status
          </text>
        </g>

        {/* 实体框 - Medicine */}
        <g transform="translate(850, 330)">
          <rect
            width="180"
            height="140"
            fill="#f1f8e9"
            stroke="#7cb342"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Medicine
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#7cb342"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            medicine_id (PK)
          </text>
          <text x="25" y="80" fontSize="12">
            medicine_name
          </text>
          <text x="25" y="100" fontSize="12">
            specification
          </text>
          <text x="25" y="120" fontSize="12">
            unit
          </text>
          <text x="25" y="140" fontSize="12">
            price
          </text>
          <text x="25" y="160" fontSize="12">
            valid_period
          </text>
        </g>

        {/* 实体框 - Prescription_Detail */}
        <g transform="translate(750, 550)">
          <rect
            width="180"
            height="120"
            fill="#ffebee"
            stroke="#c62828"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Prescription_Detail
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#c62828"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            prescription_id (FK)
          </text>
          <text x="25" y="80" fontSize="12">
            medicine_id (FK)
          </text>
          <text x="25" y="100" fontSize="12">
            Pre_medicine_quantity
          </text>
          <text x="25" y="120" fontSize="12">
            usage
          </text>
        </g>

        {/* 实体框 - Bill */}
        <g transform="translate(650, 420)">
          <rect
            width="180"
            height="120"
            fill="#fffde7"
            stroke="#fbc02d"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Bill
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#fbc02d"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            bill_number (PK)
          </text>
          <text x="25" y="80" fontSize="12">
            registration_id (FK)
          </text>
          <text x="25" y="100" fontSize="12">
            bill_amount
          </text>
          <text x="25" y="120" fontSize="12">
            bill_time
          </text>
          <text x="25" y="140" fontSize="12">
            bill_type
          </text>
        </g>

        {/* 实体框 - Vaccine */}
        <g transform="translate(50, 450)">
          <rect
            width="180"
            height="120"
            fill="#e0f7fa"
            stroke="#00acc1"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Vaccine
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#00acc1"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            vaccine_id (PK)
          </text>
          <text x="25" y="80" fontSize="12">
            vaccine_name
          </text>
          <text x="25" y="100" fontSize="12">
            manufacturer
          </text>
          <text x="25" y="120" fontSize="12">
            valid_period
          </text>
        </g>

        {/* 实体框 - Vaccination_Record */}
        <g transform="translate(50, 600)">
          <rect
            width="180"
            height="140"
            fill="#e1f5fe"
            stroke="#039be5"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Vaccination_Record
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#039be5"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            vaccination_id (PK)
          </text>
          <text x="25" y="80" fontSize="12">
            pet_id (FK)
          </text>
          <text x="25" y="100" fontSize="12">
            vaccine_id (FK)
          </text>
          <text x="25" y="120" fontSize="12">
            vaccination_date
          </text>
          <text x="25" y="140" fontSize="12">
            next_due_date
          </text>
        </g>

        {/* 实体框 - Storage */}
        <g transform="translate(350, 600)">
          <rect
            width="180"
            height="140"
            fill="#e8f5e9"
            stroke="#43a047"
            strokeWidth="2"
            rx="5"
          />
          <text
            x="90"
            y="30"
            textAnchor="middle"
            fontWeight="bold"
            fontSize="16"
          >
            Storage
          </text>
          <line
            x1="20"
            y1="40"
            x2="160"
            y2="40"
            stroke="#43a047"
            strokeWidth="1"
          />
          <text x="25" y="60" fontSize="12">
            Storage_id (PK)
          </text>
          <text x="25" y="80" fontSize="12">
            medicine_id (FK)
          </text>
          <text x="25" y="100" fontSize="12">
            Storage_location
          </text>
          <text x="25" y="120" fontSize="12">
            Storage_area
          </text>
          <text x="25" y="140" fontSize="12">
            quantity
          </text>
        </g>

        {/* 关系线 - Owner -> Pet */}
        <line
          x1="230"
          y1="120"
          x2="350"
          y2="120"
          stroke="#333"
          strokeWidth="1"
        />
        <polygon points="345,115 355,120 345,125" fill="#333" />

        {/* 关系线 - Pet -> Registration */}
        <line
          x1="530"
          y1="100"
          x2="650"
          y2="100"
          stroke="#333"
          strokeWidth="1"
        />
        <polygon points="645,95 655,100 645,105" fill="#333" />

        {/* 关系线 - Pet -> Record */}
        <line
          x1="440"
          y1="270"
          x2="440"
          y2="330"
          stroke="#333"
          strokeWidth="1"
        />
        <polygon points="435,325 440,335 445,325" fill="#333" />

        {/* 关系线 - Doctor -> Record */}
        <line
          x1="230"
          y1="320"
          x2="350"
          y2="370"
          stroke="#333"
          strokeWidth="1"
        />
        <polygon points="345,365 355,375 350,365" fill="#333" />

        {/* 关系线 - Record -> Prescription */}
        <line
          x1="530"
          y1="370"
          x2="650"
          y2="320"
          stroke="#333"
          strokeWidth="1"
        />
        <polygon points="645,315 655,325 650,325" fill="#333" />

        {/* 关系线 - Prescription -> Prescription_Detail */}
        <line
          x1="740"
          y1="370"
          x2="810"
          y2="550"
          stroke="#333"
          strokeWidth="1"
        />
        <polygon points="805,545 815,555 815,545" fill="#333" />

        {/* 关系线 - Medicine -> Prescription_Detail */}
        <line
          x1="890"
          y1="470"
          x2="860"
          y2="550"
          stroke="#333"
          strokeWidth="1"
        />
        <polygon points="855,545 865,555 865,545" fill="#333" />

        {/* 关系线 - Registration -> Bill */}
        <line
          x1="740"
          y1="170"
          x2="740"
          y2="420"
          stroke="#333"
          strokeWidth="1"
        />
        <polygon points="735,415 740,425 745,415" fill="#333" />

        {/* 关系线 - Pet -> Vaccination_Record */}
        <line
          x1="350"
          y1="150"
          x2="140"
          y2="600"
          stroke="#333"
          strokeWidth="1"
        />
        <polygon points="135,595 145,605 145,595" fill="#333" />

        {/* 关系线 - Vaccine -> Vaccination_Record */}
        <line
          x1="140"
          y1="570"
          x2="140"
          y2="600"
          stroke="#333"
          strokeWidth="1"
        />
        <polygon points="135,595 140,605 145,595" fill="#333" />

        {/* 关系线 - Medicine -> Storage */}
        <line
          x1="850"
          y1="400"
          x2="530"
          y2="620"
          stroke="#333"
          strokeWidth="1"
        />
        <polygon points="525,615 535,625 535,615" fill="#333" />
      </svg>
    </div>
  );
};

export default ERDiagram;
