import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const HierarchicalBarChart = ({ data }) => {
  // const svgRef = useRef();
  // let root;

  // let barStep = 27;
  // let duration = 750;
  // let marginTop = 30;
  // let marginBottom = 0;
  // let marginLeft = 100;
  // let marginRight = 30;
  // let height = 894;
  // let width = 954;
  // let x;
  // let y;
  // let yAxis;
  // let color;
  // let xAxis;

  // function bar(svg, down, d, selector) {
  //   const g = svg
  //     .insert('g', selector)
  //     .attr('class', 'enter')
  //     .attr('transform', `translate(0,${marginTop + barStep * barPadding})`)
  //     .attr('text-anchor', 'end')
  //     .style('font', '10px sans-serif');

  //   const bar = g
  //     .selectAll('g')
  //     .data(d.children)
  //     .join('g')
  //     .attr('cursor', (d) => (!d.children ? null : 'pointer'))
  //     .on('click', (event, d) => down(svg, d));

  //   bar
  //     .append('text')
  //     .attr('x', marginLeft - 6)
  //     .attr('y', (barStep * (1 - barPadding)) / 2)
  //     .attr('dy', '.35em')
  //     .text((d) => d.data.name);

  //   bar
  //     .append('rect')
  //     .attr('x', x(0))
  //     .attr('width', (d) => x(d.value) - x(0))
  //     .attr('height', barStep * (1 - barPadding));

  //   return g;
  // }

  // function down(svg, d) {
  //   if (!d.children || d3.active(svg.node())) return;

  //   svg.select('.background').datum(d);

  //   const transition1 = svg.transition().duration(duration);
  //   const transition2 = transition1.transition();

  //   const exit = svg.selectAll('.enter').attr('class', 'exit');
  //   exit.selectAll('rect').attr('fill-opacity', (p) => (p === d ? 0 : null));
  //   exit.transition(transition1).attr('fill-opacity', 0).remove();

  //   const enter = bar(svg, down, d, '.y-axis').attr('fill-opacity', 0);
  //   enter.transition(transition1).attr('fill-opacity', 1);
  //   enter
  //     .selectAll('g')
  //     .attr('transform', stack(d.index))
  //     .transition(transition1)
  //     .attr('transform', stagger());

  //   x.domain([0, d3.max(d.children, (d) => d.value)]);
  //   svg.selectAll('.x-axis').transition(transition2).call(xAxis);
  //   enter
  //     .selectAll('g')
  //     .transition(transition2)
  //     .attr('transform', (d, i) => `translate(0,${barStep * i})`);
  //   enter
  //     .selectAll('rect')
  //     .attr('fill', color(true))
  //     .attr('fill-opacity', 1)
  //     .transition(transition2)
  //     .attr('fill', (d) => color(!!d.children))
  //     .attr('width', (d) => x(d.value) - x(0));
  // }

  // function up(svg, d) {
  //   if (!d.parent || !svg.selectAll('.exit').empty()) return;

  //   svg.select('.background').datum(d.parent);

  //   const transition1 = svg.transition().duration(duration);
  //   const transition2 = transition1.transition();

  //   const exit = svg.selectAll('.enter').attr('class', 'exit');
  //   x.domain([0, d3.max(d.parent.children, (d) => d.value)]);
  //   svg.selectAll('.x-axis').transition(transition1).call(xAxis);
  //   exit.selectAll('g').transition(transition1).attr('transform', stagger());
  //   exit
  //     .selectAll('g')
  //     .transition(transition2)
  //     .attr('transform', stack(d.index));
  //   exit
  //     .selectAll('rect')
  //     .transition(transition1)
  //     .attr('width', (d) => x(d.value) - x(0))
  //     .attr('fill', color(true));
  //   exit.transition(transition2).attr('fill-opacity', 0).remove();

  //   const enter = bar(svg, down, d.parent, '.exit').attr('fill-opacity', 0);
  //   enter
  //     .selectAll('g')
  //     .attr('transform', (d, i) => `translate(0,${barStep * i})`);
  //   enter.transition(transition2).attr('fill-opacity', 1);
  //   enter
  //     .selectAll('rect')
  //     .attr('fill', (d) => color(!!d.children))
  //     .attr('fill-opacity', (p) => (p === d ? 0 : null))
  //     .transition(transition2)
  //     .attr('width', (d) => x(d.value) - x(0))
  //     .on('end', function (p) {
  //       d3.select(this).attr('fill-opacity', 1);
  //     });
  // }

  // function stack(i) {
  //   let value = 0;
  //   return (d) => {
  //     const t = `translate(${x(value) - x(0)},${barStep * i})`;
  //     value += d.value;
  //     return t;
  //   };
  // }

  // function stagger() {
  //   let value = 0;
  //   return (d, i) => {
  //     const t = `translate(${x(value) - x(0)},${barStep * i})`;
  //     value += d.value;
  //     return t;
  //   };
  // }

  // useEffect(() => {
    

  //   const svg = d3
  //     .select(svgRef.current)
  //     .attr('viewBox', [0, 0, width, height])
  //     .attr('width', width)
  //     .attr('height', height)
  //     .attr('style', 'max-width: 100%; height: auto;');

  //     x = d3.scaleLinear().range([marginLeft, width - marginRight]);
  //     y = d3.scaleLinear().range([height - marginBottom, marginTop]);
  //     xAxis = g => g
  //     .attr("class", "x-axis")
  //     .attr("transform", `translate(0,${marginTop})`)
  //     .call(d3.axisTop(x).ticks(width / 80, "s"))
  //     .call(g => (g.selection ? g.selection() : g).select(".domain").remove())
  //     yAxis = g => g
  //   .attr("class", "y-axis")
  //   .attr("transform", `translate(${marginLeft + 0.5},0)`)
  //   .call(g => g.append("line")
  //       .attr("stroke", "currentColor")
  //       .attr("y1", marginTop)
  //       .attr("y2", height - marginBottom))
  //   color = d3.scaleOrdinal([true, false], ['steelblue', '#aaa']);

    

  //   svg
  //     .append('rect')
  //     .attr('class', 'background')
  //     .attr('fill', 'none')
  //     .attr('pointer-events', 'all')
  //     .attr('width', width)
  //     .attr('height', height)
  //     .attr('cursor', 'pointer')
  //     .on('click', (event, d) => up(svg, d));

  //     svg.append('g').call(xAxis);
  //     svg.append('g').call(yAxis);

  //   down(svg, root);
  // }, []);

  

  // return <svg ref={svgRef}></svg>;
  return <div>Coming Soon</div>;

};

export default HierarchicalBarChart;
