import PublicLayout from "../../layout/public-layout";
import ZoomableCirclePackingChart from "../../components/zoomable-circle-packing";
import data from "../../components/zoomable-circle-packing/data.json";
import { useState } from "react";
import { handleFileChange } from "../../components/file-upload";
import { TreeNode } from "../../utils/types";
const ZoomableCirclePacking = () => {
  const [jsonData, setJsonData] = useState<TreeNode>({
    name: "Business",
    children: [],
  });

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleFileChange(event, setJsonData); // Call the imported handleFileChange function
  };

  return (
    <PublicLayout title="Zoomable Suburst Chart">
      <p className="text-2xl font-semibold text-center my-4">
        Zoomable Circle Packing chart
      </p>
      <input
        type="file"
        className="px-3 py-2"
        accept=".xlsx"
        onChange={handleFileInputChange}
      />
      {jsonData.children.length > 0 ? (
        <ZoomableCirclePackingChart data={jsonData} />
      ) : null}
    </PublicLayout>
  );
};

export default ZoomableCirclePacking;
