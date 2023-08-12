import PublicLayout from "../../layout/public-layout";
import TreeMapChart  from "../../components/treemap";
import data from '../../components/treemap/data.json';
const TreeMap = () => {
    return ( 
        <PublicLayout title="Zoomable Suburst Chart">
            <p className="text-2xl font-semibold text-center my-4">Treemap chart</p>
            <TreeMapChart data={data}  />
        </PublicLayout>
     );
}
 
export default TreeMap;