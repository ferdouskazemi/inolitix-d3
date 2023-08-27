import * as XLSX from "xlsx";
import { ExcelRow, TreeNode } from "./types";

export const convertToJSON = (data: ExcelRow[]): TreeNode => {
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
