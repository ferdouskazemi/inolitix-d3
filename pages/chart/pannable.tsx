import PublicLayout from "../../layout/public-layout";
import PannableChart from "../../components/pannable";
import data from "../../components/pannable/aapl.csv";
const Histogram = () => {
  return (
    <PublicLayout title="Pannable Chart">
      <p className="text-2xl font-semibold text-center my-4 font-[inter]">
        Pannable chart
      </p>
      <PannableChart data={data} />
      <div className="my-3">
        <h2 className="text-xl font-semibold font-[inter]">
          About this chart:{" "}
        </h2>
        <p className="max-w-[600px]">
          A histogram visualizes a one-dimensional distribution by grouping
          continuous values into discrete bins. This example shows the
          unemployment rate of U.S. counties as of August 2016. Data: Bureau of
          Labor Statistics
        </p>
      </div>
    </PublicLayout>
  );
};

export default Histogram;
