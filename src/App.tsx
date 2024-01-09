import "./App.css";

function App() {
	return (
		<main>
			<p>Insert code for design here</p>
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
		  <img className="COVER-IMAGE" alt="Cover IMAGE" src="COVER-IMAGE.png" />
		  <div className="div">Unicorn Sparkle Cupcakes 🦄✨</div>
		  <p className="p">
			Effervescent frosting imbued with tart unicorn tears and expired rainbows, piped delicately upon a delectable
			confectionary surprise!
		  </p>
		  <div className="div-wrapper">
			<div className="text-wrapper-2">ORDER A DOZEN</div>
		  </div>
		</div>
		<Logo className="logo-instance" />
		<div className="text-wrapper-3">SOUPS</div>
		<div className="text-wrapper-4">PET FOOD</div>
		<img className="PERSON" alt="Person" src="PERSON.png" />
		<img className="CART" alt="Cart" src="CART.png" />
	  </div>
	);
  };

export default App;
