import "./App.css";
import React from "react";
import logo from './assets/logo.png';
import cupcakes from './assets/cupcakes.png';
import cart from './assets/cart-shopping-solid.svg';
import profile from './assets/user-regular.svg';

function App() {

  return (
	  <main>
		<div className="wrapper">
		  <Logo/>
		  <Card/>
		  <Footer/>
		</div>
	  </main>
  );
}

  export const Logo = (): JSX.Element => {
	return (
		<img className="logo" src={logo}/>
	);
  }

  export const Card = (): JSX.Element => {
	return (
		<div className="card">
		  <CupcakesImage/>
		  <ProductDetails/>
		  <Button/>
		</div>
	);
  }

  export const CupcakesImage = (): JSX.Element => {
	return (
		<img className="cupcakes-image" alt="Image of cupcakes" src={cupcakes} />
	);
  }

  export const ProductDetails = (): JSX.Element => {
	return (
		<div className="product-wrapper">
			<h1 className="product-title">Unicorn Sparkle Cupcakes🦄✨</h1>
			<p className="product-description">
				Effervescent frosting imbued with tart unicorn tears and expired rainbows, piped delicately upon a delectable
				confectionary surprise!
			</p>
		  </div>
	);
  }

  export const Button = (): JSX.Element => {
	let [over,setOver]=React.useState(false);

	let buttonStyle={
	 backgroundColor:''
   }
 
   if(over){
	 buttonStyle.backgroundColor="#c44daa";
   }
   else{
	 buttonStyle.backgroundColor='';
   }
	return (
		<div className="button-wrapper" style={buttonStyle}
			onMouseOver={()=>setOver(true)} 
			onMouseOut={()=>setOver(false)}>
			<div className="button-text">ORDER A DOZEN</div>
		  </div>
	);
  }

  export const Footer = (): JSX.Element => {
	return (
		<div className="footer-wrapper">
			<ProfileIcon/>
			<SoupsText/>
			<DessertsText/>
			<PetFodText/>
			<CartIcon/>
		</div>
	);
  }

  export const ProfileIcon = (): JSX.Element => {
	return (
		<img className="profile-icon" alt="Profile icon" src={profile} />
	);
  }

  export const SoupsText = (): JSX.Element => {
	let [over,setOver]=React.useState(false);

	let buttonStyle={
	 backgroundColor:''
   }
 
   if(over){
	 buttonStyle.backgroundColor="#da55bd";
   }
   else{
	 buttonStyle.backgroundColor='';
   }
	return (
		<div className="soups-text" style={buttonStyle}
			onMouseOver={()=>setOver(true)} 
			onMouseOut={()=>setOver(false)}>SOUPS</div>
	);
  }

  export const DessertsText = (): JSX.Element => {
	return (
		<div className="desserts-wrapper">
			<div className="desserts-text">DESSERTS</div>
		</div>
	);
  }

  export const PetFodText = (): JSX.Element => {
	return (
		<div className="pet-food-text">PET FOOD</div>
	);
  }

  export const CartIcon = (): JSX.Element => {
	return (
		<img className="cart-icon" alt="Cart icon" src={cart} />
	);
  }

export default App;
