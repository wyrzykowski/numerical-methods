var splitDataUtils=(data)=>{
    var xAndy= data.split(";");
    x = xAndy[0];
    y = xAndy[1];
    var x= x.split(",");
    var y= y.split(",");

x.map((element, index)=>{
  x[index]=parseFloat(element);
  y[index]=parseFloat(y[index])
})

    return {x,y};
}

export default splitDataUtils;