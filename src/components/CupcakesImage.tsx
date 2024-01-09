import cupcakes from '../assets/cupcakes.png';

export const CupcakesImage = (): JSX.Element => {
	return (
		<img className="cupcakes-image" alt="Image of cupcakes" src={cupcakes} />
	);
}