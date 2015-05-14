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

function scatter(data, config){
  this.data = data;
  this.config = config;

  config.size = config.size === undefined ? 5: config.size;
  config.xLabel = config.xLabel === undefined ? "x": config.xLabel;
  config.yLabel = config.yLabel === undefined ? "y": config.yLabel;
  
  // TODO get defaults working, currently need to pass in the scale
  /*
  var scale_mod_def1 = new scale(data, config);
  config.xScale = config.xScale === undefined ? scale_mod_def1.scale_x() : config.xScale;
  config.yScale = config.yScale === undefined ? scale_mod_def1.scale_y() : config.yScale;
  */

  this.draw = function(target, data){
    target.selectAll("g")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", config.size)
      .attr("cx", function(d){
        return config.xScale()(d[config.xLabel]);
      }).attr("cy", function(d){
        return config.yScale()(d[config.yLabel]);
      });
  }
  
}
