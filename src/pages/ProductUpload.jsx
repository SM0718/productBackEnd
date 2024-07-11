import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import Button from '../components/Button'
import Input from '../components/Input'
import ImageComponent from '../components/ImageComponent'
import useCreateLogin from '../customHooks/useCreateLogin'
import { uploadFile } from '../customHooks/uploadFile'
import { useCreateProductListing } from '../customHooks/useCreateProductListing'
function ProductUpload() {

  const [error, setError] = useState("")
  const [file, setFile] = useState("")
  const [images, setImages] = useState([null, null, null, null]);
  const [active, setActive] = useState(true)
  const [loading, setLoading] = useState(false)
  const {register, handleSubmit} = useForm()

  const productUpload = async(data) => {
    // console.log(data, URL.createObjectURL(images[0]), active)
    setError("")
    setLoading(true)
    try {
      const session = await useCreateLogin()
      if(session) {
       const img1 = await uploadFile(images[0])
       const img2 = await uploadFile(images[1])
       const img3 = images[2]? await uploadFile(images[2]): null
       const img4 = images[3]? await uploadFile(images[3]): null

       if((img1 && img2) || (img3 || img4)) {
        const product = await useCreateProductListing(
          data.name, data.description, data.price, img1, img2, img3, img4, data.brand || null, active, data.available_sku, session
        )
        if(product) {
          setLoading(false)
          alert('Product Successfully Uploaded')
          window.location.reload()
        }
      }
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='w-screen h-screen py-8 px-4 xl:px-8 flex flex-col gap-8'>

      <h1 className='text-2xl font-semibold'>Add New Product</h1>

      <form onSubmit={handleSubmit(productUpload)} className='w-full flex flex-col justify-center'>

        {/* Product Description Div */}
            <div className='w-full flex flex-col lg:flex-row justify-between gap-4'>
              <div className='w-full lg:w-1/3 space-y-1'>
                <p className='text-xl font-semibold'>Description</p>
                <div className='border-2 flex flex-col gap-4 p-4'>
                  <div className='flex flex-col'>
                    <Input
                className="border-2 focus:border-blue-400 p-1"
                placeholder="Product Name"
                labelStyle="font-bold text-lg text-[#6a6e79]"
                label= "Product Name"
                required
                type="text"
                {...register("name", {
                    required: true,
                })}
                />
                  </div>
                  <div className='flex flex-col'>
                    <Input
                className= " border-2 flex items-start justify-start focus:border-blue-400 p-1"
                type="textarea"
                labelStyle="font-bold text-lg text-[#6a6e79]"
                label= "Product Description"
                required
                placeholder="Product Description"
                {...register("description", {
                    required: true,
                })}
                /> 
                  </div>
                 
              </div>
              </div>
                
               <div className='w-full lg:w-2/3'>
                  <ImageComponent images={images} setImages={setImages}/>
              </div> 
            </div>
        {/* Production Description Div End */}

                <div className='flex flex-col lg:flex-row justify-evenly gap-6 border-2 p-4 my-8'>

                  <div className='w-1/3 flex items-center gap-2'>
                  <Input
                
                className="flex flex-col items-center gap-2 border-2 focus:border-blue-400 px-1"
                placeholder="Product Price"
                labelStyle="font-bold text-sm text-[#6a6e79]"
                label= "Product Price"
                required
                type="number"
                {...register("price", {
                    required: true,
                })}
                />
                  </div>

                

                <select className='p-2'>
                  <option onClick={() => setActive(true)}>Active</option>
                  <option onClick={() => setActive(false)}>Not Active</option>
                </select>

                <div className='w-1/3 flex items-center gap-2'>
                  <Input
                className="flex flex-col items-center gap-2 border-2 focus:border-blue-400 px-1"
                placeholder="Units Available"
                labelStyle="font-bold text-sm text-[#6a6e79]"
                label= "Units Available"
                required
                type="number"
                {...register("available_sku", {
                    required: true,
                })}
                />
                </div>

                <div className='w-1/3 flex items-center gap-2'>
                  <Input
                className="flex flex-col items-center gap-2 border-2 focus:border-blue-400 px-1"
                placeholder="Brand Name"
                labelStyle="font-bold text-sm text-[#6a6e79]"
                label= "Brand Name"
                type="text"
                {...register("brand", {
                })}
                />
                </div>


                </div>

                <Button
                  type={loading? null : 'submit'}
                  className={`${loading? 'bg-blue-200' : 'bg-[#2862fa]'} w-[200px]  px-2 py-4 rounded-xl mx-auto transition duration-300 hover:bg-blue-400`}
                >{loading? 'Uploading...' : 'Upload Product'}</Button>
        </form>
             
    </div>
  )
}

export default ProductUpload