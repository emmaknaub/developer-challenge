import React from 'react';
import cart from '../../assets/cart-shopping-solid.svg';

export const CartIcon = (): JSX.Element => {
    const [over,setOver]=React.useState(false);

	const buttonStyle={
        backgroundColor:''
    }
 
    if(over){
        buttonStyle.backgroundColor="#da55bd";
    }
    else{
        buttonStyle.backgroundColor='';
    }
	return (
		<img className="cart-icon" alt="Cart icon" src={cart} style={buttonStyle}
			onMouseOver={()=>setOver(true)} 
			onMouseOut={()=>setOver(false)}/>
	);
}