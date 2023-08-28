import ZoomableSunburstChart from "../../components/zoomable-sunburst";
import PublicLayout from "../../layout/public-layout";
import { useState } from "react";
import { TreeNode } from "../../utils/types";
import { handleFileChange } from "../../components/file-upload";
const ZoomableSunburst = () => {
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
      <p className="text-2xl font-semibold text-center">Zoomable chart</p>
      <input
        type="file"
        className="px-3 py-2"
        accept=".xlsx"
        onChange={handleFileInputChange}
      />
      {jsonData.children.length > 0 ? (
        <ZoomableSunburstChart data={jsonData} />
      ) : null}
    </PublicLayout>
  );
};

export default ZoomableSunburst;
