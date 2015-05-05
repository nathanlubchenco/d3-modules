function axes(data, config){
  this.data = data;
  this.config = config;

  //defaults
  //todo abstract into helper function?
  config.xOrientation = config.xOrientation === undefined ? "bottom" : config.xOrientation;
  config.yOrientation = config.yOrientation === undefined ? "left" : config.yOrientation;
  config.xTranslation = config.xTranslation === undefined ?  "translate(0, " +  config.h + ")" : config.xTranslation;
  config.x_start_at_zero = config.x_start_at_zero === undefined ?  true : config.x_start_at_zero;
  config.y_start_at_zero = config.y_start_at_zero === undefined ?  true : config.y_start_at_zero;

  var xExtent = d3.extent(data, function(d){
    return(d[config.x]);
  });
  
  var yExtent = d3.extent(data, function(d){
    return(d[config.y]);
  });

  var xScale = config.x_start_at_zero ? 
    d3.scale.linear().domain([0, xExtent[1]]).range([0, config.w]) : 
    d3.scale.linear().domain(xExtent).range([0,config.w]);
 
  console.log(config.y_start_at_zero);
  var yScale = config.y_start_at_zero ?
    d3.scale.linear().domain([0, yExtent[1]]).range([config.h, 0]) : 
    d3.scale.linear().domain(yExtent).range([config.h, 0]);
  this.xScale = xScale;
  this.yScale = yScale;

  var xAxis = d3.svg.axis().scale(xScale).orient(config.xOrientation);
  var yAxis = d3.svg.axis().scale(yScale).orient(config.yOrientation);
  
  this.draw_x = function(target) {
    d3.select(target).append("g").attr("id", "xAxisG").call(xAxis);
    d3.selectAll("#xAxisG").attr("transform", config.xTranslation); 
  }
  
  this.draw_y = function(target) {
    d3.select(target).append("g").attr("id", "yAxisG").call(yAxis); 
  }




}
