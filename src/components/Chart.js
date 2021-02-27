import React, { Component } from 'react'
import { Bar, Line, Pie} from 'react-chartjs-2'


class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ["User Hardware Installation", "Network Hardware Installation", "User Troubleshooting", "Network Troubleshooting", 
                "Software Installation", "Firewall Installation and Configuration"],
                datasets:[{
                        label:"Services",
                        data:[
                            25,
                            50,
                            50,
                            100,
                            100,
                            100,
                        ],
                        backgroundColor:[
                                    "green",
                                    "lightgreen", 
                                    "lightgreen", 
                                    "yellow", 
                                    "yellow", 
                                    "yellow"
                        ]
                    }]
                },
            
            }
        }

    render () {
        return (
            <div className="chart">
                <Pie
                    data={this.state.chartData}
                    options={{ 
                        maintainAspectRatio: false,
                        title:{
                            display:true,
                            text: "Products in Cart",
                            fontSize: 18
                        },
                        legend:{
                            display: true,
                            position: "right"
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;