import PublicLayout from "../../layout/public-layout";
import ZoomableCirclePackingChart from "../../components/zoomable-circle-packing";
import data from '../../components/zoomable-circle-packing/data.json';
const ZoomableCirclePacking = () => {
    return ( 
        <PublicLayout title="Zoomable Suburst Chart">
            <p className="text-2xl font-semibold text-center my-4">Zoomable Circle Packing chart</p>
            <ZoomableCirclePackingChart data={data}  />
        </PublicLayout>
     );
}
 
export default ZoomableCirclePacking;