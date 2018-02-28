import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import stripe from '../../stripeKey';
import logo from '../../images/logo.svg'

export default class Step6 extends Component {
    constructor() {
        super();

        this.state = {
            bookCart: []
        }
    }
    //axios call to get cart
    componentDidMount(){
        axios.get("/api/getcart").then(res => {
            this.setState({
                bookCart: res.data
            })
        })
    }
     increment(key, id){
         if(key==="up"){
             axios.put(`/api/changequantity/${id}/${1}`).then(res => {
                 this.setState({
                     bookCart: res.data
                 })
             })
         } else {
             axios.put(`/api/changequantity/${id}/${-1}`).then(res => {
                 console.log(res);
                 this.setState({
                     bookCart: res.data
                 })
             })
         }
     }
    

    

    //stripe axios call
    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('http://localhost:4321/api/payment', { token, amount: 100 } ).then(response => {
          alert('we are in business')
        });
      }

    render(){
        let total = 0
        let cart = this.state.bookCart.map((cartLine, i) => {
            let subTotal = cartLine.book_price * cartLine.quantity;
            total += subTotal;
            return <div className="step6CartLine" key={i}>
            {/* <div className="step6BookImage"><img src = {logo} alt='logo' className='step6Logo'/></div> */}
                        <div className="step6BookTitle">{cartLine.book_title}</div>
                        <div className="step6BookSub">{cartLine.book_subtitle}</div>
                        <div className="step6BookPrice">{cartLine.book_price}</div>
                        <div className="step6BookQuantity">{cartLine.quantity}
                        <button className="incrementUp" onClick={() => this.increment("up", cartLine.book_id)}>+</button>
                        <button className="incrementDown" onClick={() => this.increment("down", cartLine.book_id)}>-</button></div>
                        <div className="step6BookTotal">{subTotal}</div>
                        
           </div>
        })
        return(
            <div>
                {cart}
                <div className="step6BookTotal">{total}</div>
                {/* <StripeCheckout
          token={this.onToken}
          stripeKey={ stripe.pub_key }
          amount={total}
          name="your order"
          description="literally  begging that you confirm this order"
        /> */}
        <button className="checkout">Check it out</button>
            </div>
        )
    }
}

