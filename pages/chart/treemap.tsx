import React, { useState } from "react";
import TreeMapChart from "../../components/treemap";
import PublicLayout from "../../layout/public-layout";
import { handleFileChange } from "../../components/file-upload";
import { TreeNode } from "../../utils/types";

const TreeMap = () => {
  const [jsonData, setJsonData] = useState<TreeNode>({
    name: "Business",
    children: [],
  });

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleFileChange(event, setJsonData);
  };

  return (
    <PublicLayout title="Zoomable Sunburst Chart">
      <p className="text-2xl font-semibold text-center my-4">Treemap chart</p>
      <input
        type="file"
        className="px-3 py-2"
        accept=".xlsx"
        onChange={handleFileInputChange}
      />
      {jsonData.children.length > 0 ? <TreeMapChart data={jsonData} /> : null}
    </PublicLayout>
  );
};

export default TreeMap;
