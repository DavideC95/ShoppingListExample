import React, {Component} from 'react';
import Thumbnail from './Thumbnail';
import ProductItem from './ProductItem';

export default class OrderItem extends Component{
	//	constructor(props){
	//		super(props)
	//
	//		this.state={
	//			quantita: 0,
	//			totale: 0
	//		}
	//	}

	//Lo stato può anche essere anche inizializzato come
	state = {quantita: 0}

	componentWillMount(){
		console.log("sto per montare",this.state.quantita);
	}

	componentDidMount(){
		console.log("sono stato renderizzato", this.state.quantita)
	}

	componentWillReciveProps(nextProps){
		console.log("sto per ricevere nuove proprietà dal padre");
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log("devo aggiornare il componente?");
		console.log(this.state, nextState);
		if(nextState < 0){
			return false
		}
		return true
	}

	componentDidUpdate(prevProps, prevState){
		console.log("Il componente è stato aggiornato");
	}

	render(){
		const subtotale =  (this.props.price * this.state.quantita).toFixed(2);
		console.log("sto elaborando il JSX e facendo il diff con il virtual DOM")
		return(
			<div style={{backgroundColor: "white", borderBottom: "5px solid black", display: "flex", justifyContent: "flex-start", padding: 10}}>
				<Thumbnail url={this.props.image} />
				<ProductItem product={this.props.product} 
							 price={this.props.price}
							 totale={this.state.totale} />
				<div style={{margin: 20}}>
					<div> Quantità: {this.state.quantita}</div>
				<div>
					<button onClick={(() => {
						this.setState({quantita: this.state.quantita + 1});
						this.props.onQuantityChange(this.props.price);
							}
						)}>Add
					</button>
					
					<button onClick={() => {
						if(this.state.quantita > 0) {
							this.setState({quantita: this.state.quantita - 1});
							this.props.onQuantityChange(-this.props.price);
							}
						}
					}>
					Remove
					</button>

				<h5> SubTotale: {subtotale}</h5>
				</div>
				</div>
			</div>
			);
	}
}


//Per le cifre che non vengono interpretate solo con 2 decimali dopo la virgola utilizziamo  (prametro_numerico).toFixed(#cifre)
