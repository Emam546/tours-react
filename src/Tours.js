import React from 'react';
import Tour from './Tour';

const Tours = ({data,deleteId}) => {
  return <section>
    <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
    </div>
    <div>
      {data.map((tour)=>{
        return <Tour key={tour.id} {...tour} deleteSelf={()=>deleteId(tour.id)}/>
      })}
    </div>
  </section>;
};

export default Tours;
