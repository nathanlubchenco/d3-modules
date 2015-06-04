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

function bars(data, config){
  //TODO move sorting here?
  
  config.xLabel = config.xLabel === undefined ? "x": config.xLabel;
  config.yLabel = config.yLabel === undefined ? "y": config.yLabel;
  
  this.draw_bars = function(target){

    result = target.selectAll('g')
      .data(data)
      .enter()
      .append("rect")
      .attr('y', function(d){
        console.log(d);
        return config.core.config.h - config.yScale()(d[config.yLabel]); //ugly syntax, need to clean this sort of thing up
      })
      .attr("x", function(d, i){
        return i * (config.core.config.w / data.length)
      })
      .attr("width", function(d, i){
        return (config.core.config.w / data.length) - 1 //todo make margin configurable
      })
      .attr("height", function(d){
        return config.yScale()(d[config.yLabel]);
      });

    return result;

  }

}
