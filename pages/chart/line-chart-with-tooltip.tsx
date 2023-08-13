import PublicLayout from "../../layout/public-layout";
import LineChart from "../../components/line-chart-with-tooltip";
import data from "../../components/line-chart-with-tooltip/aapl.csv";
const LineChartComponent = () => {
  return (
    <PublicLayout title="Line  Chart">
      <p className="text-2xl font-semibold text-center my-4 font-[inter]">
        Line chart
      </p>
      <LineChart data={data} />
      <div className="my-3">
        <h2 className="text-xl font-semibold font-[inter]">
          About this chart:{" "}
        </h2>
        <p className="max-w-[600px]">
          This time-series line chart shows the daily close of Apple stock.
          Compare to a log y-scale showing change, an area chart, a horizon
          chart, a candlestick chart, and an index chart. For multiple series,
          use a multi-line chart. Data: Yahoo Finance
        </p>
      </div>
    </PublicLayout>
  );
};

export default LineChartComponent;
