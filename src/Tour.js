import React, { useState } from 'react';
const Info=({info})=>{
  const [readInfo,setReadInfo]=useState(false)
  return <p>
    {readInfo?info:info.substring(0,200)}
    <button onClick={()=>setReadInfo(!readInfo)}>
      {readInfo?"show less":"show more"}
    </button>
  </p>
}
const Tour = ({name,image,price,info,deleteSelf}) => {
  
  
  return <article className='single-tour'>
    <img src={image} alt={name}/>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}$</h4>
      </div>
      <Info info={info}/>
      <button className='delete-btn' onClick={deleteSelf}>not interested</button>
    </footer>
  </article>;
};

export default Tour;
