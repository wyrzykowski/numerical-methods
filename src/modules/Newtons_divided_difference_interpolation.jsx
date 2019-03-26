import React, {Component} from 'react';
import horner from "../numerical-functions/horner";
import recursiveHorner from "../numerical-functions/values-of -he-polynomial";


class NewtonsDividedDifferenceInterpolation extends Component {
    render() {
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
       console.log( "recursive Horner", recursiveHorner(data,5,3));
        var tab=[3,3,-2,11]
        let result = horner(tab,1);
        console.log(result);
        return (
            <div>
                <h1>Newton's divided difference interpolation</h1>
            </div>
        );
    }
}

export default NewtonsDividedDifferenceInterpolation;