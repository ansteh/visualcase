var Graphics = {};

Graphics.scatter = function(){
  function plot(target, data){
    enhance(data);

    MG.data_graphic({
      title: "Scatterplot with Size and Color",
      data: data,
      chart_type: 'point',
      full_width: true,
      height: 400,
      right: 10,
      target: target,
      xax_format: function(f) {
          var pf = d3.formatPrefix(f);
          return Math.round(pf.scale(f)) + pf.symbol;
      },
      x_accessor: 'meetings',
      y_accessor: 'bri',
      //color_accessor:'z',
      color_range: ['white','yellow'],
      size_accessor:'w',
      //x_rug: true,
      y_rug: true
    });
  };

  function enhance(data){
    return _.map(data, function(point){
      point.z = point.meetings/10;
      point.w = point.bri/254;
      return point;
    });
  };

  return {
    render: plot
  };
};