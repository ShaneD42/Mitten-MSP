// feature 1 
import React from "react";
import Services from "./components/Services";
import data from  "./data.json";
import Clock from 'react-live-clock';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      services: data.services,
      productType: "",
      sort: "", 
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
