import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BrushableScatterplotChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) {
      // Handle the case when data is not available
      return;
    }
    // Specify the chart’s dimensions.
    const width = 928;
    const height = 600;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    // Create the horizontal (x) scale, positioning N/A values on the left margin.
    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d['Miles_per_Gallon'])])
      .nice()
      .range([marginLeft, width - marginRight])
      .unknown(marginLeft);

    // Create the vertical (y) scale, positioning N/A values on the bottom margin.
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d['Horsepower'])])
      .nice()
      .range([height - marginBottom, marginTop])
      .unknown(height - marginBottom);

    // Create the SVG container.
    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', [0, 0, width, height])
      .property('value', []);

    // Append the axes.
    svg
      .append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x))
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .append('text')
          .attr('x', width - marginRight)
          .attr('y', -4)
          .attr('fill', '#000')
          .attr('font-weight', 'bold')
          .attr('text-anchor', 'end')
          .text('Miles per Gallon')
      );

    svg
      .append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y))
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .select('.tick:last-of-type text')
          .clone()
          .attr('x', 4)
          .attr('text-anchor', 'start')
          .attr('font-weight', 'bold')
          .text('Horsepower')
      );

    // Append the dots.
    const dot = svg
      .append('g')
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr(
        'transform',
        (d) => `translate(${x(d['Miles_per_Gallon'])},${y(d['Horsepower'])})`
      )
      .attr('r', 3);

    // Create the brush behavior.
    svg.call(
      d3.brush().on('start brush end', ({ selection }) => {
        let value = [];
        if (selection) {
          const [[x0, y0], [x1, y1]] = selection;
          value = dot
            .style('stroke', 'gray')
            .filter(
              (d) =>
                x0 <= x(d['Miles_per_Gallon']) &&
                x(d['Miles_per_Gallon']) < x1 &&
                y0 <= y(d['Horsepower']) &&
                y(d['Horsepower']) < y1
            )
            .style('stroke', 'steelblue')
            .data();
        } else {
          dot.style('stroke', 'steelblue');
        }

        // Inform downstream cells that the selection has changed.
        svg.property('value', value).dispatch('input');
      })
    );
  }, [data]);

  if (!data || data.length === 0) {
    return <p>Loading or No Data Available</p>;
  }

  function brush(cell, circle, svg, { padding, size, x, y, columns }) {
    const brush = d3
      .brush()
      .extent([
        [padding / 2, padding / 2],
        [size - padding / 2, size - padding / 2],
      ])
      .on('start', brushstarted)
      .on('brush', brushed)
      .on('end', brushended);

    cell.call(brush);

    let brushCell;

    // Clear the previously-active brush, if any.
    function brushstarted() {
      if (brushCell !== this) {
        d3.select(brushCell).call(brush.move, null);
        brushCell = this;
      }
    }

    // Highlight the selected circles.
    function brushed({ selection }, [i, j]) {
      let selected = [];
      if (selection) {
        const [[x0, y0], [x1, y1]] = selection;
        circle.classed(
          'hidden',
          (d) =>
            x0 > x[i](d[columns[i]]) ||
            x1 < x[i](d[columns[i]]) ||
            y0 > y[j](d[columns[j]]) ||
            y1 < y[j](d[columns[j]])
        );
        selected = data.filter(
          (d) =>
            x0 < x[i](d[columns[i]]) &&
            x1 > x[i](d[columns[i]]) &&
            y0 < y[j](d[columns[j]]) &&
            y1 > y[j](d[columns[j]])
        );
      }
      svg.property('value', selected).dispatch('input');
    }

    // If the brush is empty, select all circles.
    function brushended({ selection }) {
      if (selection) return;
      svg.property('value', []).dispatch('input');
      circle.classed('hidden', false);
    }
  }
  return <svg ref={svgRef}></svg>;
};

export default BrushableScatterplotChart;
