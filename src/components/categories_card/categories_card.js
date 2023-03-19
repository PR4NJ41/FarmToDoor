import React from 'react'
import "./categories_card.css"

const categories_card = ({name,add}) => {
  console.log(name,add);
  return (
    <>
		<div className='categories_card'>
			<img src={add} alt="category_img"></img>
            <div className='txt'>{name}</div>
		</div>
    </>
  )
}

export default categories_card