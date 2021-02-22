import React, { Component } from 'react'
import formatCurrency from '../util'



export default class Services extends Component {
    render() {
        return (
            <div>
                <ul className="services">
                   {this.props.services.map((service) => (
                       <li key={service._id}>
                           <div className="service">
                               <a href={"#" + service._id}>
                                   <img className ="service-images" src={service.image} alt={service.title}/>
                                   <p> 
                                       {service.title}
                                   </p> 
                               </a>

                               <div className="service-price">
                                   <div>
                                       {formatCurrency(service.price)}
                                   </div>
                                       <button onClick= {() => this.props.addToCart(service)}
                                        className="button primary">
                                           Add To Cart </button>
                               </div>

                           </div>
                       </li>
                   ))} 
                 </ul>
            </div>
        )
    }
}
