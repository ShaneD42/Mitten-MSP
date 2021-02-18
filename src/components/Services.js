import React, { Component } from 'react'


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
                                       {service.price}
                                   </div>
                                   <div>
                                       <button className="button primary">
                                           Add To Cart
                                       </button>
                                   </div>
                                   
                                   
                               </div>

                           </div>
                       </li>
                   ))} 
                 </ul>
            </div>
        )
    }
}
