import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Shop from '../svg/Shop'
import Hamburger from './Hamburger'

function Header() {

  const [visible, setVisible] = useState(false)

  const headerItems = [
    {
      name: 'Product Upload',
      slug: '/'
    },
    {
      name: 'My Products',
      slug: '/my-products'
    },
  ]

  return (
    <nav className='bg-[#eeeeee] h-lvh w-16 xl:w-1/6 py-8 px-4 flex flex-col items-start gap-4'>
      <span className='hidden xl:flex justify-start items-center gap-2'>
        <Shop />
        <h1 className='font-bold'>
          Dashboard Features
        </h1>
      </span>
      <ul className='hidden xl:flex flex-col gap-2'>
        { 
        headerItems.map(item => <li key={item.slug}>
          <NavLink to={item.slug} className={({isActive}) => `${isActive? "text-[#2862fa] font-bold" : ""}`}>
            {
              item.name
            }
            </NavLink>
        </li>)
      }
      </ul>
      <Hamburger visible={visible} setVisible={setVisible}/>

      <ul className={`${visible? "flex w-screen h-[100px]" : 'hidden'} z-50 justify-center items-center bg-[#eeeeee] flex flex-col gap-2`}>
        {
        headerItems.map(item => <li onClick={() => setVisible(false)} key={item.slug}>
          <NavLink to={item.slug} className={({isActive}) => `${isActive? "text-[#2862fa] font-bold" : ""}`}>
            {
              item.name
            }
            </NavLink>
        </li>)
      }
      </ul>
    </nav>
  )
}

export default Header