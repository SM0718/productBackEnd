import React, { useState, useRef } from 'react';
import ImgUpload from '../svg/ImgUpload';
import Button from './Button'

function ImageComponent({images, setImages}) {
    
    const imageRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleImageClick = (index) => {
        imageRefs[index].current.click();
    };

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        const newImages = [...images];
        newImages[index] = file;
        setImages(newImages);
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        const newImages = [...images];
        newImages[index] = file;
        setImages(newImages);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };


    const deletePic = (index) => {
        const newImages = [...images];
        newImages[index] = null
        setImages(newImages)
    }

    const deleteAll = () => {
        setImages([null, null, null, null])
    }

    return (
    <div className='w-full h-full space-y-4 px-4'>
        <p className='text-xl font-semibold flex items-center gap-2'>Product Pictures *Min Two Required <Button onClick={deleteAll} className={'text-xs text-red-400'}>(Remove All)</Button></p>
        <div className='w-full h-5/6 flex flex-col lg:flex-row gap-3'>
            
            {images.map((img, index) => (
                <div 
                    key={index} 
                    className={`w-full lg:w-1/2 max-h-[400px] relative ${img? 'border-0' : 'border-2 border-dotted'} border-[#2862fa] rounded-xl cursor-pointer` }
                    onClick={() => handleImageClick(index)}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragOver={handleDragOver}
                >

                    
                    {img ? <img className='w-full h-[200px] max-h-[400px] rounded-xl' src={URL.createObjectURL(img)} alt={`Image ${index + 1}`} /> : 
                    <div className='size-full flex flex-col justify-center items-center'>
                        <ImgUpload />{(index < 2)? 
                        <p className='text-xs text-[#6a6e79]'>Required</p> : ""}
                    </div>}


                    <input 
                        className='hidden'
                        type='file'
                        ref={imageRefs[index]}
                        onChange={(e) => handleImageChange(e, index)}
                    />

                    {img && <span onClick={() => deletePic(index)} className='absolute -top-4 -right-2 text-red-400 text-m font-semibold'>X</span>}
                </div>
            ))}
        </div>
    </div>
        
    );
}

export default ImageComponent;
