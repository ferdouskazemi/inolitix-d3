import { useState } from "react";
import * as XLSX from "xlsx";
import { convertToJSON } from "../../utils/excel-to-json";

interface TreeNode {
  name: string;
  value?: number;
  children: TreeNode[];
}

interface ExcelRow {
  Source: string;
  Account: string;
  Year: number;
  TxnType: string;
  Tag: string;
  Amount: number;
}

export const handleFileChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setJsonData: React.Dispatch<React.SetStateAction<TreeNode>>
) => {
  const file = event.target.files?.[0];
  if (!file) {
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
