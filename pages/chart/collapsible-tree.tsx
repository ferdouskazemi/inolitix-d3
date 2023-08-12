import CollapsibleTreeChart from "../../components/colaapsible-tree";
import PublicLayout from "../../layout/public-layout";
import data from '../../components/colaapsible-tree/data.json'
const CollapsibileTree = () => {
    return ( 
        <PublicLayout title="Zoomable Suburst Chart">
            <p className="text-2xl font-semibold text-center">Collapsible Tree chart</p>
            <CollapsibleTreeChart data={data} />
        </PublicLayout>
     );
}
 
export default CollapsibileTree;