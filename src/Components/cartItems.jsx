import React  from 'react';


    // let addItemAray = () => {
    //     let itemName = cartItemsList.map(product => product.name)
    //     return itemName
    // }
    
    // console.log(addItemAray)
    

    // console.log(cartItemsList[1].product.name)

let itemName = 


const CartItems = (props) => {
    return (
        <div className="container">
            <h1>Items</h1>
            <div className="collection-item">
            <div className="row">
                <div className="col-md-8">Product</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Quanitity</div> 
        </div>
        </div>
        <div className = "row">
        <div className='col-md-8'>{itemName}</div>
        </div>
        </div>
    )
}

export default CartItems;
