import { useEffect, useRef } from "react";
import * as d3 from "d3";

const PannableChart = ({ data }) => {
  const svgRef = useRef();

  // Specify the chart’s dimensions.
  useEffect(() => {
    // Specify the chart dimensions and margins. The width is determined by Observable’s stdlib,
  // making it reactive when the window is resized. The total width of the chart is computed
  // as 6 times the window width.
  const width = 954;
  const totalWidth = width * 6;
  const height = 420;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 30;

  // Create the horizontal (x) scale over the total width.
  const x = d3.scaleUtc()
      .domain(d3.extent(data, d => d.date))
      .range([marginLeft, totalWidth - marginRight]);

  // Create the vertical (x) scale.
  const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.close)]).nice(6)
      .range([height - marginBottom, marginTop]);

  // Define an area shape generator.
  const area = d3.area()
      .curve(d3.curveStep)
      .x(d => x(d.date))
      .y0(y(0))
      .y1(d => y(d.close));

  // Create a div that holds two svg elements: one for the main chart and horizontal axis,
  // which moves as the user scrolls the content; the other for the vertical axis (which 
  // doesn’t scroll).
  const parent = d3.select(svgRef.current);

  // Create the svg with the vertical axis. 
  parent.append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("position", "absolute")
      .style("pointer-events", "none")
      .style("z-index", 1)
    .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).ticks(6))
      .call(g => g.select(".domain").remove())
      .call(g => g.select(".tick:last-of-type text").clone()
          .attr("x", 3)
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .text("$ Close"));

  // Create a scrolling div containing the area shape and the horizontal axis. 
  const body = parent.append("div")
      .style("overflow-x", "scroll")
      .style("-webkit-overflow-scrolling", "touch");

  const svg = d3.select(svgRef.current)
      .attr("width", totalWidth)
      .attr("height", height)
      .style("display", "block");

  svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x).ticks(d3.utcMonth.every(1200 / width)).tickSizeOuter(0));

  svg.append("path")
      .datum(data)
      .attr("fill", "steelblue")
      .attr("d", area);

  

  // Initialize the scroll offset after yielding the chart to the DOM.
  body.node().scrollBy(totalWidth, 0);
  }, []);

return <svg ref={svgRef}></svg>;
};

export default PannableChart;
