import BarChartRaceChart from "../../components/bar-chart-race";
import PublicLayout from "../../layout/public-layout";
const BarChartRace = () => {


    const csvFilePath = '/bar-chart-race.csv'; // Relative path to the CSV file

    const fetchData = async () => {
        try {
            const response = await fetch(csvFilePath);
            const data = await response.text(); // Get the CSV data as text
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }


    return ( 
        <PublicLayout title="Zoomable Suburst Chart">
            <p className="text-2xl font-semibold text-center">Collapsible Tree chart</p>
            <BarChartRaceChart data={fetchData} />
        </PublicLayout>
     );
}
 
export default BarChartRace;