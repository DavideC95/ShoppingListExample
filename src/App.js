import React, { Component } from 'react';
import './App.css';
import OrderItem from './OrderItem';


  
class App extends Component {
  constructor(props){
      super(props);
      this.state={totale: 0};
  }

  quantitaCambiata(amount){
    this.setState({totale: parseFloat(this.state.totale + amount)})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My shopping List</h2>
        </div>
        <div>
        <OrderItem
            product="Acqua minerale Levissima"
            image="http://www.daddario.com/resources/jdcdad/images/products/da_prod_ej16_main_1.jpg"
            price={0.90}
            //Creaimo un gestore di eventi 
            onQuantityChange={this.quantitaCambiata.bind(this)}
            //Può contenere qualsiasi tipo di dato, anche una funzione
            />
        </div>
                <div>
        <OrderItem
            product="Acqua minerale Levissima"
            image="http://www.daddario.com/resources/jdcdad/images/products/da_prod_ej16_main_1.jpg"
            price={1.80}
            onQuantityChange={this.quantitaCambiata.bind(this)}
            />
        </div>
        <div>
        <OrderItem
            product="Acqua minerale Levissima"
            image="http://www.daddario.com/resources/jdcdad/images/products/da_prod_ej16_main_1.jpg"
            price={0.80}
            onQuantityChange={this.quantitaCambiata.bind(this)}
            />
        </div>
        <div>
            Totale: {this.state.totale} Euro
        </div>

      </div>
    );
  }
}

export default App;
