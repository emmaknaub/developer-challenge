import React from 'react';
import profile from '../../assets/user-regular.svg';

export const ProfileIcon = (): JSX.Element => {
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
		<img className="footer-icon" alt="Profile icon" src={profile} style={buttonStyle}
			onMouseOver={()=>setOver(true)} 
			onMouseOut={()=>setOver(false)}/>
	);
}