import React, {Component} from 'react';
import horner from "../numerical-functions/horner";
import recursiveHorner, {newtonDividedDiff} from "../numerical-functions/values-of -he-polynomial";
import splitDataUtils from "../utils/splitData";
import createDataFormat from "../utils/createDataFormat";


class Quadrature extends Component {
    state={
        data: null,
        data_x:null,
        data_y:null,
        points:null,
        coefficients:null,
    }

    calculate(){ // Calculate horner for each point
        const hornerResult = this.state.points.map(e => {
         return horner(this.state.coefficients, e)
        })
        //console.log("HORNER RESULT:",hornerResult);
        this.setState({hornerResult});
        return hornerResult;
    }


   isNearEnough(element) {
        const points = this.state.points;
        var newIndex=false;
        points.map((point,index)=>{
          //  console.log(element >= (point )&& element <= (point + 0.1))
          //  console.log("point:",point,"element",element)
            if(element >= (point )&& element <= (point + 0.1)){
                newIndex=index;
            }
        })

       if(newIndex) return newIndex;
//If not find so close point
       points.map((point,index)=>{
           if(element >= (point )&& element <= (point + 0.5)){
               //console.log("true",index)
               newIndex=index;
           }

       })
       if(newIndex) return newIndex;
       //If not find so close point
       points.map((point,index)=>{
           if(element >= (point )&& element <= (point + 2)){
               newIndex=index;
           }
       })
     return 0;



    }

    calculateQuadratureNewtonCotesSimpson(){
        const points = this.state.points;
        const hornerResult = this.calculate();
//console.log("TESUJEEE",hornerResult[35])


        var quadratureResult = 0;
        var simposnRes=0;
        var sum=0;
        const quadratureArrayResult= points.map((e,index)=>{
            if(index<=points.length-2){
                const el = ((points[index]+points[index+1])/2);
               // console.log("el",el)
                const ress=this.isNearEnough(el);
              // console.log("el: ",el,"near",ress,"INDEX: ",index)
              //  console.log("jaki x",(points[index]+points[index+1])/2)
                //console.log("jaki index",Math.abs(Math.round((points[index]+points[index+1])/2)))
                //console.log("dziala",hornerResult[(points[index]+points[index+1])/2])
               // console.log("sad",((points[index+1]-points[index])/6)*(hornerResult[index]+(4*hornerResult[ress])+hornerResult[index+1]));
                simposnRes += ((points[index+1]-points[index])/6)*(hornerResult[index]+(4*hornerResult[ress])+hornerResult[index+1]);
              //  console.log("sum",sum);

              //  console.log("Simpson:",simposnRes+quadratureResult);

            }
        })
        console.log("Simson res:",simposnRes);
        //console.log("quadrature array result",quadratureArrayResult)
        return quadratureResult;
    }

    calculateQuadratureNewtonCotes(){
        const points = this.state.points;
        const hornerResult = this.calculate();

        var quadratureResult = 0;
        const quadratureArrayResult= points.map((e,index)=>{
            if(index<=points.length-2){
                return quadratureResult += ((points[index+1]- points[index])/2)*(hornerResult[index]+hornerResult[index+1])
            }
        })
        console.log("Newton Cotes:",quadratureResult);
        //console.log("quadrature array result",quadratureArrayResult)
        return quadratureResult;
    }

    calculateQuadrature(){
        const points = this.state.points;
        const hornerResult = this.calculate();
        console.log(hornerResult)
        //koło 200 musi wyjść
         var quadratureResult = 0;
         const quadratureArrayResult= points.map((e,index)=>{
           if(index<=points.length-2){
              // console.log("po kolei:",quadratureResult)
              return quadratureResult += (((points[index+1]-points[index])/2)*hornerResult[index]+((points[index+1]-points[index])/2)*hornerResult[index+1])

           }
       })
        console.log("Qadratur Result:",quadratureResult);
       // console.log("quadrature array result",quadratureArrayResult)
        return quadratureResult;
    }

    onFileButtonChange(e){
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsText(files[0])
        reader.onload = (e)=> {
            var splitedData= splitDataUtils(e.target.result);
            var data = createDataFormat(splitedData);
            this.setState({data,coefficients:splitedData.x,points:splitedData.y},()=>{
                console.log("coefficeint",this.state.coefficients,"points",this.state.points)
               // this.calculate();
                this.calculateQuadrature();
                this.calculateQuadratureNewtonCotes();
                this.calculateQuadratureNewtonCotesSimpson();
            })
            //console.warn("data", e.target.result);
        }
    }


    render() {



if(this.state.data){
    var tab=[3,3,-2,11]
   // let hornerResult = horner(this.state.points,1);




}

        return (
            <div>
                <h1>Quadrature</h1>
                <div className="custom-file">
                    <input  onChange={(e)=>this.onFileButtonChange(e)} type="file" className="btn custom-file-input" id="inputGroupFile03"/>
                    <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
                    <h6>Results of:</h6>
                </div>
            </div>
        );
    }
}

export default Quadrature;