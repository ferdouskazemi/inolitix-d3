import PublicLayout from '../../layout/public-layout';
import ArcDiagramChart from '../../components/arc-diagram';
import { useEffect, useState } from 'react';
const ArcDiagram = () => {
  
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch( '/data.json' )
      .then((response) => response.json())
      .then((data) => {
        setNodes(data.nodes);
        setLinks(data.links);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <PublicLayout title="Zoomable Suburst Chart">
      <p className="text-2xl font-semibold text-center">Arc Diagram chart</p>
      <ArcDiagramChart nodes={nodes} links={links} />
    </PublicLayout>
  );
};

export default ArcDiagram;
