import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter"> 
                
                <div className="filter-result"> {this.props.count} Services {" "}</div>
                <div className="filter-sort"> Sort {" "} <select value={this.props.price} onChange={this.props.sortServices}>
                    <option value="lowest"> Price (Lowest) </option>
                    <option value="highest"> Price (Highest)</option>

               </select>
                     
                     </div>

                <div className="filter-producttype"> Filter {" "}
                 <select value={this.props.productType} onChange={this.props.filterServices}> 
                     <option value=""> All </option>
                     <option value="Desktop"> Desktop </option>
                     <option value="Laptop"> Laptop </option>
                     <option value="Tablet"> Tablet </option>
                     <option value="Switch"> Switch </option>
                     <option value="Access Point"> Access Point </option>
                     <option value="NAS Storage Device"> NAS Storage Device </option>
                     <option value="Firewall"> Firewall </option>
                    </select>
                    </div>
            

             </div> 


        )
    }
}
