import { ProfileIcon } from "./FooterItems/ProfileIcon";
import { SoupsText } from "./FooterItems/SoupsText";
import { DessertsText } from "./FooterItems/DessertsText";
import { PetFoodText } from "./FooterItems/PetFoodText";
import { CartIcon } from "./FooterItems/CartIcon";

export const Footer = (): JSX.Element => {
	return (
		<div className="footer-wrapper">
			<ProfileIcon/>
			<SoupsText/>
			<DessertsText/>
			<PetFoodText/>
			<CartIcon/>
		</div>
	);
  }