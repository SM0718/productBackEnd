import React from 'react'

function Hamburger({visible, setVisible}) {
  return (
    <div onClick={() => setVisible(!visible)} className='flex xl:hidden cursor-pointer'>
      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7L7 7M20 7L11 7" stroke="#1C274C" strokeWidth="1" strokeLinecap="round"/>
        <path d="M20 17H17M4 17L13 17" stroke="#1C274C" strokeWidth="1" strokeLinecap="round"/>
        <path d="M4 12H7L20 12" stroke="#1C274C" strokeWidth="1" strokeLinecap="round"/>
    </svg>
    </div>
    
  )
}

export default Hamburger