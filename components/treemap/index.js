import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const TreeMapChart = ({ data }) => {
  const svgRef = useRef();
  console.log("Received data:", data); // Add this line

  useEffect(() => {
    const width = 1154;
    const height = 1154;

    const color = d3.scaleOrdinal(
      data.children.map((d) => d.name),
      d3.schemeTableau10
    );

    const root = d3.treemap().size([width, height]).padding(1).round(true)(
      d3
        .hierarchy(data)
        .sum((d) => d.value)
        .sort((a, b) => b.value - a.value)
    );

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, height])
      .attr("width", width)
      .attr("height", height)
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

    const leaf = svg
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

    const format = d3.format(",d");
    leaf.append("title").text(
      (d) =>
        `${d
          .ancestors()
          .reverse()
          .map((d) => d.data.name)
          .join(".")}\n${format(d.value)}`
    );

    leaf
      .append("rect")
      .attr("fill", (d) => {
        while (d.depth > 1) d = d.parent;
        return color(d.data.name);
      })
      .attr("fill-opacity", 0.6)
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0);

    // Append a clipPath to ensure text does not overflow.
    leaf
      .append("clipPath")
      .attr("id", (d, i) => `clip-${i}`)
      .append("rect")
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0);

    // Append multiline text. The last line shows the value and has a specific formatting.
    leaf
      .append("text")
      .attr("clip-path", (d, i) => `url(#clip-${i})`)
      .selectAll("tspan")
      .data((d) =>
        d.data.name.split(/(?=[A-Z][a-z])|\s+/g).concat(format(d.value))
      )
      .join("tspan")
      .attr("x", 3)
      .attr(
        "y",
        (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`
      )
      .attr("fill-opacity", (d, i, nodes) =>
        i === nodes.length - 1 ? 0.7 : null
      )
      .text((d) => d);
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default TreeMapChart;
