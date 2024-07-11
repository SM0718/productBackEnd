import service from '../appwrite/config'
import authService from '../appwrite/auth'

export const deleteProduct = async(productId) => {
    console.log(productId)
  try {
    const del = await service.deleteProduct(productId)
    if(del) window.location.reload()
  } catch (error) {
    console.log('dp', error)
  }
}
