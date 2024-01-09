import {CupcakesImage} from './CupcakesImage';
import { ProductDetails } from './ProductDetails';
import { Button } from './Button';

export const Card = (): JSX.Element => {
	return (
		<div className="card">
            <CupcakesImage/>
            <ProductDetails/>
            <Button/>
		</div>
	);
}