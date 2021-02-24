// feature 1 
import React from "react";
import Services from "./components/Services";
import data from  "./data.json";
import Filter from "./components/Filter";
import Cart from "./components/Cart";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      services: data.services, 
      cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")): [], 
      productType: "",
      sort: "", 
    } 
  }


// Add to Cart Function 
addToCart = (service) => {
  const cartItems = this.state.cartItems.slice();
  let alreadyInCart = false;
  cartItems.forEach((item) => {
    if(item._id === service._id) {
      item.count++;
      alreadyInCart = true;
    }
  });
  if (!alreadyInCart) {
    cartItems.push({ ...service, count: 1});  
  }
  this.setState({cartItems}); 
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// Remove From Cart Function

removeFromCart = (service) => {
  const cartItems = this.state.cartItems.slice();
  this.setState({cartItems: cartItems.filter((x) => x._id !== service._id),
  });
  localStorage.setItem(
    "cartItems", 
    JSON.stringify(cartItems.filter((x) => x._id !== service._id))
  )
};

// Create Order Function 
createOrder = (order) => {
  alert("Need to save order for "+ order.name);
}

  // Sort results function 
  sortServices =(event) => {
    // implmenet 
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState(state => ({
      sort: sort, 
      services: this.state.services.slice().sort((a,b) => (
        sort === "lowest"?
        ((a.price > b.price)? 1:-1 ):
        sort === "highest"?
        ((a.price <  b.price)? 1:-1 ):
        ((a._id > b._id)? 1 :-1 )
      ))
    }))
  }

  // Filter results function 
  filterServices = (event) => { 
    // implempment 
    console.log(event.target.value);
    if(event.target.value === ""){
      this.setState({productType: event.target.value, service: data.services});
    } else {
      this.setState({
        productType: event.target.value,
        services: data.services.filter(service => service.productType.indexOf(event.target.value)>=0),
      });
    }
    }



  render()
  {return ( 
   <div className="grid-container">

     {/* HEADER */}
     <header>
       <a href="/">Mitten MSP </a>
     </header>


    {/* MAIN  */}
     <main>
       <div className="content">
         <div className="main"> 
         <Filter count={this.state.services.length}
         productType={this.state.productType}
         sort={this.state.sort}
         filterServices={this.filterServices}
         sortServices={this.sortServices}
         ></Filter>
         <Services services={this.state.services} addToCart={this.addToCart}> </Services> 
         </div>
         <div className="sidebar"> 
         <Cart 
         cartItems={this.state.cartItems} 
         removeFromCart={this.removeFromCart}
         createOrder ={this.createOrder } />
         </div>
       </div>
     </main> 


      {/* FOOTER */}

          <footer>  
            All Rights Reserved  
          </footer>
        </div>
        
        );

        }
      }

export default App;