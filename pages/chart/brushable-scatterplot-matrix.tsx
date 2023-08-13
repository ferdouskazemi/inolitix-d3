import PublicLayout from "../../layout/public-layout";
import BrushableScatterplotMatrixChart from "../../components/brushable-scatterplot-matrix";
import data from "../../components/brushable-scatterplot-matrix/penguins.csv";
const BrushableScatterplotMatrix = () => {
  return (
    <PublicLayout title="Brushable scatterplot matrix Chart">
      <p className="text-2xl font-semibold text-center my-4 font-[inter]">
        Brushable scatterplot matrix chart
      </p>
      <BrushableScatterplotMatrixChart data={data} />
      <div className="my-3">
        <h2 className="text-xl font-semibold font-[inter]">
          About this chart:{" "}
        </h2>
        <p className="max-w-[600px]">
          The scatterplot matrix (SPLOM) shows pairwise correlations for
          multi-dimensional data; each cell is a scatterplot where x encodes the
          column’s dimension and y encodes the row’s dimension. This matrix
          shows Kristen Gorman’s data on penguins near Palmer Station in
          Antarctica. The implementation allows brushing to select data points
          in one cell, and highlight them across all other cells.
        </p>
      </div>
    </PublicLayout>
  );
};

export default BrushableScatterplotMatrix;
