import React from "react";

export const SoupsText = (): JSX.Element => {
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
		<div className="footer-text" style={buttonStyle}
			onMouseOver={()=>setOver(true)} 
			onMouseOut={()=>setOver(false)}>SOUPS</div>
	);
}