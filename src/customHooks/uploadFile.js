import React from 'react'
import service from '../appwrite/config'

export const uploadFile = async(file) => {
    
    try {
        const upload = await service.uploadFile(file)
        if (upload) {
            return upload.$id
        }
    } catch (error) {
        console.log(error)
    }
    
}
