import { Input, Table } from "antd";
import React, { useState } from "react";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const handleInputChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);

    const filtered = data.filter((record) =>
      Object.values(record).some((value) =>
        value.toString().toLowerCase().includes(searchText)
      )
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <Input
        className="my-4"
        placeholder="Buscar Producto"
        value={searchText}
        onChange={handleInputChange}
        allowClear
      />
      <Table
        columns={columns}
        dataSource={
          filteredData.length
            ? filteredData
            : [{ key: "nodata", noData: "No data" }]
        }
        onChange={onChange}
        locale={{
          emptyText: "No data",
        }}
      />
    </div>
  );
};

export default Products;
