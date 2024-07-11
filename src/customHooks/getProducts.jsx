import service from '../appwrite/config'
import authService from '../appwrite/auth'

export const getProducts = async() => {
  try {
    const user = await authService.getCurrentUser()
    if(user) {
      const products = await service.getProducts(user.$id) 
      if(products) return products.documents
    }
  } catch (error) {
    console.log(error)
  }
}
