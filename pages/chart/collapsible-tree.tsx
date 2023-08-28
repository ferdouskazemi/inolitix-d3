import CollapsibleTreeChart from "../../components/colaapsible-tree";
import PublicLayout from "../../layout/public-layout";
import data from "../../components/colaapsible-tree/data.json";
import { useState } from "react";
import { TreeNode } from "../../utils/types";
import { handleFileChange } from "../../components/file-upload";
const CollapsibileTree = () => {
  const [jsonData, setJsonData] = useState<TreeNode>({
    name: "data",
    children: [],
  });

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleFileChange(event, setJsonData);
  };
  return (
    <PublicLayout title="Zoomable Suburst Chart">
      <p className="text-2xl font-semibold text-center">
        Collapsible Tree chart
      </p>
      <input
        type="file"
        className="px-3 py-2"
        accept=".xlsx"
        onChange={handleFileInputChange}
      />
      {jsonData.children.length > 0 ? (
        <CollapsibleTreeChart data={jsonData} />
      ) : null}
    </PublicLayout>
  );
};

export default CollapsibileTree;
