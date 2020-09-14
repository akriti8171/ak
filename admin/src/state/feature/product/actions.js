import {PRODUCT_TYPE} from './types'
export const productDetails = ()=>{
    console.log('action type',PRODUCT_TYPE)
    return {
        type:PRODUCT_TYPE
    }

}