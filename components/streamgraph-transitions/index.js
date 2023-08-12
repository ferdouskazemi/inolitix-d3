import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const StreamgraphTransitionsChart = () => {
  const svgRef = useRef();

  // Define the bumps function
  const bumps = (n, m) => {
    // Inspired by Lee Byron’s test data generator.
    const bump = (a, n) => {
      const x = 1 / (0.1 + Math.random());
      const y = 2 * Math.random() - 0.5;
      const z = 10 / (0.1 + Math.random());
      for (let i = 0; i < n; ++i) {
        const w = (i / n - y) * z;
        a[i] += x * Math.exp(-w * w);
      }
    };

    const a = [];
    for (let i = 0; i < n; ++i) a[i] = 0;
    for (let i = 0; i < m; ++i) bump(a, n);
    return a;
  };

  useEffect(() => {
    const width = 928;
    const height = 500;

    // Define other variables (m, n, offset, k)
    const m = 200; // Number of time steps
    const n = 20; // Number of layers
    const offset = d3.stackOffsetWiggle; // Offset function
    const k = 10; // Number of bumps per layer

    const x = d3.scaleLinear([0, m - 1], [0, width]);
    const y = d3.scaleLinear([0, 1], [height, 0]);
    const z = d3.interpolateCool;

    const area = d3
      .area()
      .x((d, i) => x(i))
      .y0((d) => y(d[0]))
      .y1((d) => y(d[1]));

    const stack = d3
      .stack()
      .keys(d3.range(n))
      .offset(offset)
      .order(d3.stackOrderNone);

    function randomize() {
      const layers = stack(
        d3.transpose(Array.from({ length: n }, () => bumps(n, k)))
      );
      y.domain([
        d3.min(layers, (l) => d3.min(l, (d) => d[0])),
        d3.max(layers, (l) => d3.max(l, (d) => d[1])),
      ]);
      return layers;
    }

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', [0, 0, width, height])
      .attr('width', width)
      .attr('height', height)
      .attr('style', 'width: 100%; height: auto;');

    const path = svg
      .selectAll('path')
      .data(randomize)
      .join('path')
      .attr('d', area)
      .attr('fill', () => z(Math.random()));

    const updateStreamgraph = () => {
      path
        .data(randomize)
        .transition()
        .delay(1000)
        .duration(1500)
        .attr('d', area)
        .on('end', updateStreamgraph); // Trigger the transition again after it's finished
    };

    updateStreamgraph();
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default StreamgraphTransitionsChart;
