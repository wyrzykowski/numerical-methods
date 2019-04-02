import React, {Component} from 'react';
import horner from "../numerical-functions/horner";
import recursiveHorner, {newtonDividedDiff} from "../numerical-functions/values-of -he-polynomial";
import splitDataUtils from "../utils/splitData";
import createDataFormat from "../utils/createDataFormat";


class NewtonsDividedDifferenceInterpolation extends Component {
    state={
        data: null,
        data_x:null,
        data_y:null
    }


    onFileButtonChange(e){
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsText(files[0])
        reader.onload = (e)=> {
            var splitedData= splitDataUtils(e.target.result);
            var data = createDataFormat(splitedData);
            this.setState({data,data_x:splitedData.x,data_y:splitedData.y},()=>{
            })
            //console.warn("data", e.target.result);
        }
    }


    render() {
        console.log("STATE DATA",this.state.data,"x:",this.state.data_x,"y:",this.state.data_y)
        const data = [
            {
                x: -2,
                y: 5
            },
            {
                x: -1,
                y: -2
            },
            {
                x: 0,
                y: 4
            },
            {
                x: 1,
                y: -7
            },
            {
                x: 2,
                y: 2
            }
        ];



if(this.state.data){
    var tab=[3,3,-2,11]
    let hornerResult = horner(this.state.data_y,1);
    console.log("1.Obliczanie wartości wielomianu zadanego w postaci naturalnej\n" +
        "dla dowolnej wartości x z wykorzystaniem schematu Hornera:\n",hornerResult)


    const coefficients =  newtonDividedDiff(this.state.data,this.state.data.length)
    console.log( "2. Obliczanie wartości wielomianu zadanego w postaci Newtona\n" +
        "dla dowolnej wartości x z wykorzystaniem uogólnionego\n" +
        "schematu Hornera\n","współczynniki: ",coefficients,"\n Wynik:" , recursiveHorner(this.state.data,coefficients, this.state.data.length,1));





}

        return (
            <div>
                <h1>Newton's divided difference interpolation</h1>
                <div className="custom-file">
                    <input  onChange={(e)=>this.onFileButtonChange(e)} type="file" className="btn custom-file-input" id="inputGroupFile03"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
                </div>
            </div>
        );
    }
}

export default NewtonsDividedDifferenceInterpolation;