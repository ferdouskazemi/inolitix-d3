import PublicLayout from "../layout/public-layout";
import StreamgraphTransitionsChart  from "../components/streamgraph-transitions";
const StreamgraphTransitions = () => {
    return ( 
        <PublicLayout title="Zoomable Suburst Chart">
            <p className="text-2xl font-semibold text-center">Streamgraph Transitions chart</p>
            <StreamgraphTransitionsChart  />
        </PublicLayout>
     );
}
 
export default StreamgraphTransitions;