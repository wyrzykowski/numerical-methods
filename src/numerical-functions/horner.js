import doApproximation from "./approximation";




var horner=( wsp=[],x)=>{
        var wynik = wsp[0];
        for(let i=1;i<=wsp.length-1;i++)
        wynik = wynik*x + wsp[i];
        return wynik;
}

export default horner;

