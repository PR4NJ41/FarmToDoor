import React from 'react'
import "./item.css"

export default function item(props) {
  return (props.trigger) ? (
    <div className='mainItem'>
        <img src={props.itemImgPath}/>
        <button onClick={()=>props.setTrigger(false)}>Close</button>
        <div>Name {props.itemName}</div>
        <div>Seller {props.itemFrom}</div>
        <div>Price {props.itemPrice}</div>
        <div>Image {props.itemImgPath}</div>
    </div>
  ) : "";
}
