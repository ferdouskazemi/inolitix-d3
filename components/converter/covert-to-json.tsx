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

const convertToJSON = (data: ExcelRow[]): TreeNode[] => {
  const jsonData: TreeNode[] = [];

  data.forEach((row) => {
    let sourceNode = jsonData.find((node) => node.name === row.Source);
    if (!sourceNode) {
      sourceNode = { name: row.Source, children: [] };
      jsonData.push(sourceNode);
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

    const tagNode = { name: row.Tag, value: row.Amount };
    txnTypeNode.children.push(tagNode);
  });

  return jsonData;
};



