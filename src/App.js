// feature 1 
import React from "react";
import Services from "./components/Services";
import data from  "./data.json";
import Clock from 'react-live-clock';
import Filter from "./components/Filter";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      services: data.services,
      productType: "",
      sort: "", 
    } 
  }

  // sort results function

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

  // filter results function 

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
     <header>
       <a href="/">Mitten MSP </a>
     </header>

     <main>
       <div className="content">
         <div className="main"> 
         <Filter count={this.state.services.length}
         productType={this.state.productType}
         sort={this.state.sort}
         filterServices={this.filterServices}
         sortServices={this.sortServices}
         > </Filter>
         <Services services={this.state.services}> </Services> </div>
         <div className="sidebar"> Cart Items </div>
       </div>
     </main>

     <footer>
       
     <Clock
          date={'1997-12-31T14:15:23+01:00'}
          format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} />
     </footer>
   </div>
   
  );

  }
}

export default App;
