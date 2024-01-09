import "./App.css";
import logo from './assets/logo.png';
import cupcakes from './assets/cupcakes.png';
import cart from './assets/cart-shopping-solid.svg';
import profile from './assets/user-regular.svg';

function App() {
	return (
		<main>
			<ActivePage/>
		</main>
	);
}

export const ActivePage = (): JSX.Element => {
	return (
	  <div className="wrapper">
		<div className="active-page">
		  <div className="desserts-text">DESSERTS</div>
		</div>
		<div className="card">
		  <img className="cupcakes-image" alt="Image of cupcakes" src={cupcakes} />
		  <div className="product-wrapper">
			<h1 className="product-title">Unicorn Sparkle Cupcakes🦄✨</h1>
			<p className="product-description">
				Effervescent frosting imbued with tart unicorn tears and expired rainbows, piped delicately upon a delectable
				confectionary surprise!
			</p>
		  </div>
		  <div className="button-wrapper">
			<div className="button-text">ORDER A DOZEN</div>
		  </div>
		</div>
		<img className="logo" src={logo}/>
		<div className="soups-text">SOUPS</div>
		<div className="pet-food-text">PET FOOD</div>
		<img className="profile-icon" alt="Profile icon" src={profile} />
		<img className="cart-icon" alt="Cart icon" src={cart} />
	  </div>
	);
  };

export default App;
