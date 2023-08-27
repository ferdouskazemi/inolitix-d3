import React, { useState } from "react";
import * as XLSX from "xlsx";
import TreeMapChart from "../../components/treemap";
import PublicLayout from "../../layout/public-layout";

interface ExcelRow {
  Source: string;
  Account: string;
  Year: number;
  TxnType: string;
  Tag: string;
  Amount: number;
}

interface TreeNode {
  name: string;
  value?: number;
  children: TreeNode[];
}

const convertToJSON = (data: ExcelRow[]): TreeNode => {
  const jsonData: TreeNode = { name: "data", children: [] };

  data.forEach((row) => {
    let sourceNode = jsonData.children.find((node) => node.name === row.Source);
    if (!sourceNode) {
      sourceNode = { name: row.Source, children: [] };
      jsonData.children.push(sourceNode);
    }

    let accountNode = sourceNode.children.find(
      (node) => node.name === row.Account
    );
    if (!accountNode) {
      accountNode = { name: row.Account, children: [] };
      sourceNode.children.push(accountNode);
    }

    let yearNode = accountNode.children.find(
      (node) => node.name === String(row.Year)
    );
    if (!yearNode) {
      yearNode = { name: String(row.Year), children: [] };
      accountNode.children.push(yearNode);
    }

    let txnTypeNode = yearNode.children.find(
      (node) => node.name === row.TxnType
    );
    if (!txnTypeNode) {
      txnTypeNode = { name: row.TxnType, children: [] };
      yearNode.children.push(txnTypeNode);
    }

    const tagNode = { name: row.Tag, value: row.Amount, children: [] };
    txnTypeNode.children.push(tagNode);
  });

  return jsonData;
};

const TreeMap = () => {
  const [jsonData, setJsonData] = useState<TreeNode>({
    name: "Business",
    children: [],
  });

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]; // Use optional chaining to handle null value
    if (!file) {
      // No file selected, handle this case if needed
      return;
    }
    const reader = new FileReader();

    reader.onload = function (e) {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json<ExcelRow>(sheet);
      const jsonResult = convertToJSON(excelData);
      setJsonData(jsonResult);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <PublicLayout title="Zoomable Sunburst Chart">
      <p className="text-2xl font-semibold text-center my-4">Treemap chart</p>
      <input
        type="file"
        className="px-3 py-2"
        accept=".xlsx"
        onChange={handleFileChange}
      />
      {jsonData.children.length > 0 ? <TreeMapChart data={jsonData} /> : null}
    </PublicLayout>
  );
};

export default TreeMap;
