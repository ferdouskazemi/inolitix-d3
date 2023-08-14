import PublicLayout from '../../layout/public-layout';
import BrushableScatterplotChart from '../../components/brushable-scatterplot';
import data from '../../components/brushable-scatterplot/cars-2.csv';
const BrushableScatterplot = () => {
  return (
    <PublicLayout title="Brushable scatterplot Chart">
      <p className="text-2xl font-semibold text-center my-4 font-[inter]">
      Brushable scatterplot chart
      </p>
      <BrushableScatterplotChart data={data} />
      <div className="my-3">
        <h2 className="text-xl font-semibold font-[inter]">
          About this chart:{' '}
        </h2>
        <p className="max-w-[600px]">
          This chart shows the inverse relationship between engine power
          (y-axis) and fuel efficiency (x-axis) in 406 cars from 1970–1982.
          Brushing this scatterplot will show the selected data points.
        </p>
      </div>
    </PublicLayout>
  );
};

export default BrushableScatterplot;
