import React from 'react'
import "./categories_card.css"

const categories_card = ({name,add}) => {
  console.log(name);
  return (
    <>
		<div className='categories_card'>
			<img src={add} alt="category_img"></img>
            <h7>{name}</h7>
		</div>
    </>
  )
}

export default categories_card