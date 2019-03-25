import Approximation from "../modules/Approximation";

const legendre=(k, x)=>{
    switch (k) {
        case 0:
            return 1.0;
        case 1:
            return x;
        default:
            return ((((2 * k - 1) / k) * x) * legendre(k - 1, x)) - (((k - 1) / k) * legendre(k - 2, x))
    }
}


const scalar = (f,g) => {

    var ilo=0;

    for(let i = 0; i < f.length; i++) {
        ilo+=f[i]*g[i];
    }
    return ilo;
};

console.log(scalar([1,1,1],[1,2,3]))

var resultArray=[];
var data_x_Array=[];


//Liczy approksymacje dla jednego x (tak jak było kiedyś)
var approximation=(data,x)=> {

    const { x: g, y: f } = data;
    const length = f.length;
    let result = 0;

    for (let j = 0; j < length; ++j) {
        const fj = g.map(item => legendre(j, item));//map x values


        const fx = legendre(j, x);
        // console.log("x", x)

        result += ((scalar(f, fj)) / (scalar(fj, fj))) * fx;  // scalar with y values
        //console.log("fx:", fx, j, "to", ((scalar(f, fj)) / (scalar(fj, fj))))

        // console.log(result)
    }
    return result;
}


//Wywołuje funckje aproksmujaca kilka razy co pewien "point" np 0.1 tak, żeby potem fjany wykres narysować
var doApproximation=(data,point)=>{
    resultArray=[];
    data_x_Array=[];
    var singleApproxResult;

    for(let i=data.x[0];i<data.x[data.x.length-1];i=parseFloat(i)+point){


        singleApproxResult = approximation(data,i);
        console.log(singleApproxResult)
        data_x_Array.push(i);
        resultArray.push(singleApproxResult);

    }
    console.log("x",resultArray)
    return ({y:resultArray,x:data_x_Array}); //  zwracam OBIKT do którego wdowłam się mojaNowaTablicaX=obikt.x mojaNowaTavlicaY = obiket.y
}

export default doApproximation;




