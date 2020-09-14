import {PRODUCT_TYPE} from "./types"
import {companyDetails} from "./utilis"
const intialState = companyDetails

export const productReducer =(state=intialState, action)=>{
    // console.log('reducers is working',intialState,PRODUCT_TYPE)

  if(action.type===PRODUCT_TYPE){
      return {
          ...state,
          companyNames:state
      }
  }
  else{
      return state
  }

}
