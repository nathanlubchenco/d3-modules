// surely there is a better way to do imports
// investigate es6

function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

/* include any js files here */
include('core-modules/scales.js');
include('core-modules/helpers.js');

function axes(data, config){
  this.data = data;
  this.config = config;

  //defaults
  config.xOrientation = config.xOrientation === undefined ? "bottom" : config.xOrientation;
  config.yOrientation = config.yOrientation === undefined ? "left" : config.yOrientation;
  config.xTranslation = config.xTranslation === undefined ?  "translate(0, " +  config.h + ")" : config.xTranslation;

  var scale_mod_def = new scale(data, config);
  config.xScale = config.xScale === undefined ? scale_mod_def.scale_x() : config.xScale;
  config.yScale = config.yScale === undefined ? scale_mod_def.scale_y() : config.yScale;

  var xAxis = d3.svg.axis().scale(config.xScale).orient(config.xOrientation);
  var yAxis = d3.svg.axis().scale(config.yScale).orient(config.yOrientation);
  
  this.draw_x = function(target) {
    d3.select(target).append("g").attr("id", "xAxisG").call(xAxis);
    d3.selectAll("#xAxisG").attr("transform", config.xTranslation); 
  }
  
  this.draw_y = function(target) {
    d3.select(target).append("g").attr("id", "yAxisG").call(yAxis); 
  }

}
