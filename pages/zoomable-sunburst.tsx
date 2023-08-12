import ZoomableSunburstChart from "../components/zoomable-sunburst";
import PublicLayout from "../layout/public-layout";
import data from './../components/zoomable-sunburst/data.json'
const ZoomableSunburst = () => {
    return ( 
        <PublicLayout title="Zoomable Suburst Chart">
            <p className="text-2xl font-semibold text-center">Zoomable chart</p>
            <ZoomableSunburstChart data={data} />
        </PublicLayout>
     );
}
 
export default ZoomableSunburst;