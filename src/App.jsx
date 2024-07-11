import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'

function App() {
  return (
    <div className='flex'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App


// import React, { useState } from 'react'

// function App() {
//     const [search , setSearch] = useState("");
//     const [data , setData] = useState("");
//     const [error , setError] = useState("");
//     const API_KEY = "b0162aa87b87d65a99e8dbae9a8ae9e2";
//     const handleInput =(event)=>{
//         setSearch(event.target.value)
//     }
//       const myWork = async() =>{
//         const get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
//         const jsonData = await get.json();
//         console.log(jsonData.weather);
//         setData(jsonData.weather)

//       if (search=="") {
//         alert("Please enter a proper city name")
//       }
//       }
      
    
//   return (
//     <div className="container">
//         <div className='inputs'>
//         <input type="text" placeholder='Enter city or country' onChange={handleInput} />
//         <button onClick={myWork}>
//         <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

//         </button>
//         </div>
//         <div>
//           {
//             data && 
//             <div>
//               <h2>{data.name}</h2>
//               <h2>{data.main.temp}</h2>
//               <p>{data.weather[0].description}</p>
//             </div>
//           }
//         </div>
//     </div>
//   )
// }

// export default App