import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const NoTours=({refresh})=>{
  return<div className='title'>
        <h2>no tours</h2>
        <div className='underline'></div>
        <button className='btn' onClick={refresh}>Refresh</button>
    </div>
}
function App() {
  const [loading,setloading]=React.useState(true)
  const [tours,setTours]=React.useState([])
  async function getData(){
      setloading(true)
      const res=await fetch(url)
      const data=await res.json()
      setTours(data)
      console.log(data);
      setloading(false)
  }
  useEffect(()=>{getData()},[])
  function deleteId(id){
    setTours((perTours)=>{
      return perTours.filter((tour)=>{
        return tour.id!=id
      })
    })
  }
  if(loading)
  return <main>
    <Loading state={loading}/>
  </main>
  if(tours.length)
    return <main>
      <Tours data={tours} deleteId={deleteId}/>
    </main>
  return <main>
        <NoTours refresh={getData}/>
    </main>
}

export default App
