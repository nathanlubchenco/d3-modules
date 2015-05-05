function core(config){
  //defaults
  //todo abstract into helper function?
  config.selector = config.selector === undefined ?  "main" : config.selector;
  config.margin = config.margin === undefined ?  {top: 20, right: 10, bottom: 20, left: 10} : config.margin; 
  config.w = config.w === undefined ? config.outerWidth - config.margin.left - config.margin.right: config.w;
  config.h = config.h === undefined ? config.outerHeight - config.margin.top - config.margin.bottom : config.h;

 this.block = d3.select(config.target).append("svg")
  .attr("width", config.w + config.margin.left + config.margin.right)
  .attr("height", config.h + config.margin.top + config.margin.bottom)
  .append("g")
  .attr("transform", "translate(" + config.margin.left + "," + config.margin.top + ")")
  .attr("id", config.selector);

 this.config = config;

}
