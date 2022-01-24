// You can change the width and height of the plot here.
// If you labels are very long and the text is cut off, 
// you may have to make the right or left margins bigger.
var margin = {top: 10, right: 80, bottom: 30, left: 140},
    width = 950 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// This selects the <div> object and sets up the plot. 
// Leave this section alone.
var svg = d3.select("#d3_div")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


d3.csv("data.csv",
  function(data) {

    // This defines the X axis events. List all the events inside
    // the "domain" array.
    var x = d3.scalePoint()
      .domain(["waking up","school","home at night", "sleeping"])
      .range([0,width]);

    // This sets up the X axis. Leave this alone.
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .attr("class","axis")
      .call(d3.axisBottom(x));

    // This defines the Y axis moods. List all the moods inside
    // the "domain" array.
    var y = d3.scalePoint()
      .domain(["energetic","tired but focused","energetic","happy"])
      .range([ height, 0 ]);

    // This sets up the Y axis. Leave this alone.
    svg.append("g")
      .attr("class","axis")
      .call(d3.axisLeft(y));

    // This adds the line between the points.
    // You can play around with the styling, and change the 
    // styling attributes. Leave the lines after the "d" attr
    // alone.
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "plum")
      .attr("stroke-width", 3.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.event) })
        .y(function(d) { return y(d.value) })
        )
        
    // This adds the points. Don't change the "cx" and "cy" 
    // axis, but try changing the radius in the "r" attr,
    // and the color with the "fill" attr.
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
        .attr("cx", function(d) { return x(d.event) } )
        .attr("cy", function(d) { return y(d.value) } )
        .attr("r", 5)
        .attr("fill", "#87CEFA")
})
