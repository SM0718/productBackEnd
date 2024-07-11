import React, {useEffect, useState} from 'react'
import { getProducts } from '../customHooks/getProducts'
import service from '../appwrite/config';
import Button from '../components/Button';
import Hamburger from '../svg/Hamburger';
import { deleteProduct } from '../customHooks/deleteProduct';
function MyProducts() {

  const [data, setData] = useState([])
  const [productDelete, setProductDelete] = useState()

  useEffect(() => {
    listings()
  }, [])

  const listings = async() => {
    try {
      const product = await getProducts()
      if(product){
        setData(product)
       console.log(product[0].$id)
      } 
    } catch (error) {
      console.log(error)
    }
  }

  const ImgPreview = (file, className) => {
    const img = service.getFilePreview(file.file)
    return (
      <img className={`${className} h-full rounded-xl`} src={img.href} />
    )

  }

  const Description = (desc) => {
   const str = String(desc.desc).slice(0, 20) + '...';
   console.log(desc)
   return (
    <>
      {
        str
      }
    </>
   )
  }

  
  return (
    <div className='w-full flex flex-col justify-start items-center py-8 px-8'>
      <h1 className='text-4xl font-bold text-center pt-8 pb-16'>My Products <span>{data && data.length}</span></h1>
      
      <div className='w-full flex gap-4'>
        { data? data.map((item, index) => 

              <div key={index} className='relative group w-1/4 h-[400px] flex flex-col justify-center items-center p-2 bg-slate-200 rounded-lg'>
              <div className='w-[250px] h-[250px]'>
                  <ImgPreview file={item.pic1}/>
              </div>

              <div className='w-full mt-8 flex flex-col gap-2'>
                  <p className='w-full text-center font-semibold'>{item.name} </p>
                  <p className='w-full text-center'><Description desc={item.description}/></p>
                  <p className='w-full text-center font-bold text-yellow-600'>Rs {item.price}</p>
              </div>
              <div className='absolute group/item flex flex-col top-4 right-2'>
                  <Button className={`hidden group-hover:flex w-full  rounded-full`}><Hamburger /></Button>

                 <div className='hidden group-hover/item:flex flex-col bg-white p-2'>
                  <Button className={'font-bold text-start hover:bg-slate-300 p-1'}>Edit</Button>
                  <Button onClick={() => deleteProduct(item.$id)} className={'font-bold text-start hover:bg-slate-300 p-1'}>Delete</Button>
                 </div>
              </div>
              
            </div>

        )
        
           :
          <div></div>
        }
      </div>
        
      
    </div>
  )
}

export default MyProducts