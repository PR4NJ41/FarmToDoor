import React from 'react'
import "./categories_card.css"

const categories_card = ({name,add}) => {
  // console.log(name,add);
  return (
    <>
		<div className='cardCategory'>
			<img src={add} alt="imgCategory"></img>
            <div className='txtCategory'>{name}</div>
		</div>
    </>
  )
}

export default categories_card