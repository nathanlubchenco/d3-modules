function scale(data, config){
  this.data = data;
  this.config = config;

  // TODO configuartion options for non-linear scales
  config.x_start_at_zero = config.x_start_at_zero === undefined ?  true : config.x_start_at_zero;
  config.y_start_at_zero = config.y_start_at_zero === undefined ?  true : config.y_start_at_zero;
 config.xLabel = config.xLabel === undefined ? "x": config.xLabel;
 config.yLabel = config.yLabel === undefined ? "y": config.yLabel;
  
  var xExtent = d3.extent(data, function(d){
    return(d[config.xLabel]);
  });
  
  var yExtent = d3.extent(data, function(d){
    return(d[config.yLabel]);
  });

  var xScale = config.x_start_at_zero ? 
    d3.scale.linear().domain([0, xExtent[1]]).range([0, config.w]) : 
    d3.scale.linear().domain(xExtent).range([0,config.w]);
 
  var yScale = config.y_start_at_zero ?
    d3.scale.linear().domain([0, yExtent[1]]).range([0, config.h]) : 
    d3.scale.linear().domain(yExtent).range([0, config.h]);
  
  this.scale_x = function(){
    return xScale;
  }
  this.scale_y = function(){
    return yScale;
  }

}

