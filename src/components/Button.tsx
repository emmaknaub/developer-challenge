import React from "react";

export const Button = (): JSX.Element => {
	const [over,setOver]=React.useState(false);

    const buttonStyle={
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