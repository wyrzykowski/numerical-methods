import React, {Component} from 'react';
import DrawLinearChart from '../utils/drawLinearChart'
import splitDataUtils from './../utils/splitData'
import Chart from "chart.js";
import createDataFormat from "../utils/createDataFormat";
import 'react-input-range/lib/css/index.css'
import doApproximation from "../numerical-functions/approximation";
import InputRange from 'react-input-range';

// import createDataFormat from "../utils/createDataFormat";



class Approximation extends DrawLinearChart {
    state={
        data_1: false,
        data_2: false,
        data_to_approximate:false
    }


    constructor(props) {
        super(props);

        this.state = { value: 0.1 };
    }



    calculateApproximate(){
        var dataApprox = doApproximation( this.state.data_to_approximate,this.state.value);//przjmuje :obiek: {x:tablica xsów,y:tablica Ygreków,point np 0.1)
        var dataApproxFormated=createDataFormat(dataApprox);
        this.setState({data_2:dataApproxFormated},()=>{
            this.updateCanvas()
        })
    }



    onFileButtonChange(e){
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsText(files[0])
        reader.onload = (e)=> {
            var splitedData= splitDataUtils(e.target.result);
            var dataFunction = createDataFormat(splitedData);
            this.setState({data_1:dataFunction,data_to_approximate:splitedData},()=>{
            this.calculateApproximate();
            })


            console.warn("img data", e.target.result);
        }
    }

    handleRangeChange(value){
    this.calculateApproximate();
    this.setState({ value });
    }

    render() {
console.log(this.state)
        return (
            <div style={{width:"99vw",padding:"1vh"}}>
                <h1>Approximation</h1>
                <canvas ref="canvas" width={"90"} height={"20"}/>
                <div className="custom-file">
                    <input  onChange={(e)=>this.onFileButtonChange(e)} type="file" className="btn custom-file-input" id="inputGroupFile03"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
                </div>
                <div style={{width:"20%", marginTop:"2vh"}}>
                    <h6>Set point: </h6>
                    <div className={"mt-4"}>
                    <InputRange
                        step={0.01}
                        maxValue={1}
                        minValue={0.000000001}
                        value={this.state.value}
                        onChange={value =>  this.handleRangeChange(value)}/>
                    </div>
                </div>


                <div className={"mt-5"}>
                    <h5>Data to Approximate:</h5>
                    <p>
                        x:
                        {
                            this.state.data_1 && this.state.data_1.map(element=>
                                 <span key={element.x}>{element.x}  </span>
                            )
                        }
                    </p>
                    <p>
                        y:
                        {
                            this.state.data_1 && this.state.data_1.map(element=>
                                <span key={element.y}>{element.y}  </span>
                            )
                        }
                    </p>
                    <h5>Approximated data:</h5>
                    <p>
                        x:
                        {
                            this.state.data_2 && this.state.data_2.map(element=>
                                <span key={element.x}>{element.x}  </span>
                            )
                        }
                    </p>
                    <p>
                        y:
                        {
                            this.state.data_2 && this.state.data_2.map(element=>
                                <span key={element.y}>{element.y}  </span>
                            )
                        }
                    </p>
                </div>
            </div>
        );
    }
}

export default Approximation;