import React, { Component } from 'react';
import './App.css';
import CartHeader from './Components/cartHeader'
import CartFooter from './Components/cartFooter'
import CartItems from './Components/cartItems'



class App extends Component {

  constructor(){
    super()
    
  }

  render() {

   let StartItemsList = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  
    
    return (
      <div>
      <CartHeader/>  
      <CartItems/>
      <CartFooter/>
      </div>
    )
  }
}
export default App;
