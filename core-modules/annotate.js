function annotate(config){

   //TODO defaults for no line config = a collapsed point (or if that is still visible, some other solution

    this.draw_line = function(svgContainer){
      var l = svgContainer.append("line")
        .attr("x1", config.line.x1)
        .attr("x2", config.line.x2)
        .attr("y1", config.line.y1)
        .attr("y2", config.line.y2)
        .attr("stroke-width", 2) // make configurable
        .attr("stroke", "black");
      return l;

    //this.arb_text

    }
}
