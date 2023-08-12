import PublicLayout from "../../layout/public-layout";
import ZoomableBarChart  from "../../components/zoomable-bar-chart";
import data from '../../components/zoomable-bar-chart/data.csv'; 
const ZoomableBar = () => {
    return ( 
        <PublicLayout title="Zoomable Suburst Chart">
            <p className="text-2xl font-semibold text-center my-4">Treemap chart</p>
            <ZoomableBarChart data={data}  />
        </PublicLayout>
     );
}
 
export default ZoomableBar;