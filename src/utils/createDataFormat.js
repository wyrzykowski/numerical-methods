
var createDataFormat  =(data)=>{

    var dataArray=[];
    data.x.map((element,index)=>{
        dataArray.push({x:element,y:data.y[index]})
    })
    console.log(dataArray);
    return dataArray;
}
export default createDataFormat;