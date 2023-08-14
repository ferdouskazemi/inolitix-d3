import PublicLayout from '../../layout/public-layout';
import HierarchicalBarChart from '../../components/hierarchical-bar-chart';
import data from '../../components/hierarchical-bar-chart/flare-2 (6).json';
const HierarchicalBar = () => {
  return (
    <PublicLayout title="Hierarchical bar Chart">
      <p className="text-2xl font-semibold text-center my-4 font-[inter]">
      Hierarchical bar chart
      </p>
      <HierarchicalBarChart data={data} />
      <div className="my-3">
        <h2 className="text-xl font-semibold font-[inter]">
          About this chart:{' '}
        </h2>
        <p className="max-w-[600px]">
        Click a blue bar to drill down, or click the background to go back up.`
        </p>
      </div>
    </PublicLayout>
  );
};

export default HierarchicalBar;
