import service from "../appwrite/config"

export const useCreateProductListing = async(
                    name,
                    description,
                    price,
                    pic1,
                    pic2,
                    pic3,
                    pic4,
                    brand,
                    active,
                    available_sku,
                    userId,
) => {
        try {
            const upload = await service.createProduct(
                {
                    name,
                    description,
                    price,
                    pic1,
                    pic2,
                    pic3,
                    pic4,
                    brand,
                    active,
                    available_sku,
                    userId,
                }
            )

            if(upload) return upload
        } catch (error) {
            console.log('Inside uCPL', error)
        }

}
