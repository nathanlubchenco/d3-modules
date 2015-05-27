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

function lines(data, config){
  //TODO move sorting here?
  
  config.xLabel = config.xLabel === undefined ? "x": config.xLabel;
  config.yLabel = config.yLabel === undefined ? "y": config.yLabel;
  
  this.draw_line = function(target){

    var line = d3.svg.line()
        .x(function(d) { return config.xScale()(d[config.xLabel]); })
        .y(function(d) { return config.yScale()(d[config.yLabel]); })
        .interpolate("cardinal");

    var result = target.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    return result;

  }

}
