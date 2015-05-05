# d3-modules
modularized d3 components

## Overview
Goal is to provide re-usable components for efficient construct of related charts.

### Examples
Use the core_mod object to contstruct a basic structure using the margin convention from [http://bl.ocks.org/mbostock/3019563](http://bl.ocks.org/mbostock/3019563)  

This requires only a target selector and an outerWidth and outerHeight.  Default margins are provided but can be passed in to override.
   ``` 
    var core_config = {
      target: "#mainChart", 
      outerWidth:  800,
      outerHeight:  400
  ```

Currently the only supported module is an axis component.  It requires an inner height and width, which are derivable as defaults from core_config.  It also requires the name of the data that should be used for the x and y axis.  The default behavior is to start axes at zero, but this can be overridden by passing x_start_at_zero: false or y_start_at_zero: false.

```
  var axes_config = {
    h: core_mod.config.h, 
    w:core_mod.config.w, 
    x: "x", 
    y:"y",
    x_start_at_zero: true,
    y_start_at_zero: false, //for demonstration of overriding defaults only (generally bad) 
  };
```
