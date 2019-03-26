function newtonDividedDiff(data, n) {
    let y = data.map(i => [i.y, 0]);
    const x = data.map(i => i.x);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            y[j][i] = (y[j][i - 1] - y[j + 1][i - 1]) / (x[j] - x[i + j]);
        }
    }

    return y.map(i => i[1]);
}




function recursiveHorner(data_d,n,x) {
    const data = data_d.map((e)=>e.x);
    console.log("data",data)
    let res = data[0];
    const newtonDevidedDiffRes =  newtonDividedDiff(data,n);
    console.log("no" ,newtonDevidedDiffRes);
    for (let i = 1; i < n; ++i) {
        res = res * (x - newtonDevidedDiffRes[i]) + Number(data[i]);
    }

    return res;
}
export default recursiveHorner;