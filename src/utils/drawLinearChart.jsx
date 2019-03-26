import React, {Component} from 'react';
import Chart from "chart.js";

class DrawLinearChart extends Component {


    componentDidMount() {
        this.updateCanvas()
    }
    updateCanvas() {

        var dataApprox = this.state.data_2;
        var dataFuncion = this.state.data_1;


        var ctx = this.refs.canvas.getContext('2d');
        var LinearChart = new Chart(ctx, {
            type: 'line',
            labels: [],
            data: {
                labels: [],
                datasets: [{
                    label: 'function',
                    data: dataFuncion,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.0)',

                        'rgba(255, 159, 64, 0.0)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                    {
                        label: 'approximation',
                        data: dataApprox,
                        backgroundColor: [
                            'rgba(255, 22, 32, 0.0)',

                        ],
                        borderColor: [
                            'rgba(25, 99, 132, 1)',

                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }],
                    yAxes: [{
                        ticks: {
                            min: -10,
                            max: 20
                        }
                    }]
                }
            }
        })
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default DrawLinearChart;




