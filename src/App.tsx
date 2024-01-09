import "./App.css";
import logo from './assets/logo.png';
import cupcakes from './assets/cupcakes.png';
import cart from './assets/cart-shopping-solid.svg';
import profile from './assets/user-regular.svg';

function App() {
	return (
		<main>
			<IphoneProMax/>
		</main>
	);
}

export const IphoneProMax = (): JSX.Element => {
	return (
	  <div className="iphone-pro-max">
		<div className="overlap">
		  <div className="text-wrapper">DESSERTS</div>
		</div>
		<div className="overlap-group">
		  <img className="COVER-IMAGE" alt="Cover IMAGE" src={cupcakes} />
		  <div className="product-wrapper">
			<h1 className="product-title">Unicorn Sparkle Cupcakes🦄✨</h1>
			<p className="product-description">
				Effervescent frosting imbued with tart unicorn tears and expired rainbows, piped delicately upon a delectable
				confectionary surprise!
			</p>
		  </div>
		  <div className="div-wrapper">
			<div className="text-wrapper-2">ORDER A DOZEN</div>
		  </div>
		</div>
		<img className="logo-instance" src={logo}/>
		<div className="text-wrapper-3">SOUPS</div>
		<div className="text-wrapper-4">PET FOOD</div>
		<img className="PERSON" alt="Person" src="PERSON.png" />
		<img className="CART" alt="Cart" src="CART.png" />
	  </div>
	);
  };

export default App;
