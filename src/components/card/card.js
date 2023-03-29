
import "./card.css"
import React from 'react';
const Card = ({name,add,cost,seller}) => {
  console.log(name,add);
  return (
    <>
		<div className='card'>
      {/* {setClicked && <Product name1={name}/>} */}
			<img src={add} className="product_img" alt="cat_img"></img>
            <div className='txt1'>{name}</div>
            <div className='txt2'>{seller}</div>
            <div className='row'><div className='row1'><div className='txt3'>{cost+"₹"}</div>
            <div className='txt4'>/per kg</div></div>
            <img alt ="abc" className= "img_icon" src="/images/add.svg"></img></div>
		</div>
    </>
  )
}

export default Card